import type { CLSReportCallback, Metric } from "web-vitals";
import { onCLS, onFID, onFCP, onLCP, onTTFB } from "web-vitals";

const vitalsUrl = "https://vitals.vercel-analytics.com/v1/vitals";

function getConnectionSpeed() {
  const isSupported = !!(navigator as any)?.connection?.effectiveType;

  return isSupported ? (navigator as any)?.connection?.effectiveType : "";
}

export function sendAnalytics(metric: Metric) {
  const analyticsId = window.ENV.ANALYTICS_ID;

  if (!analyticsId) {
    return;
  }

  const body = {
    dsn: analyticsId,
    id: metric.id,
    page: window.location.pathname,
    href: window.location.href,
    event_name: metric.name,
    value: metric.value.toString(),
    speed: getConnectionSpeed(),
  };

  const blob = new Blob([new URLSearchParams(body).toString()], {
    type: "application/x-www-form-urlencoded",
  });
  if (navigator.sendBeacon) {
    navigator.sendBeacon(vitalsUrl, blob);
  } else
    fetch(vitalsUrl, {
      body: blob,
      method: "POST",
      credentials: "omit",
      keepalive: true,
    });
}

export const reportWebVitals = (onPerfEntry: CLSReportCallback) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    try {
      onCLS(onPerfEntry);
      onFID(onPerfEntry);
      onFCP(onPerfEntry);
      onLCP(onPerfEntry);
      onTTFB(onPerfEntry);
    } catch (err) {
      console.error("[Analytics]", err);
    }
  }
};
