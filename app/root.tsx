import styles from "~/styles/app.css";
import global from "~/styles/global.css";
import type { MetaFunction, SerializeFrom } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
} from "@remix-run/react";
import { Footer } from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
  title: "Santi Dalmasso",
  author: "Santi Dalmasso",
  HandheldFriendly: "True",
  pagename: "Santi Dalmasso",
  MobileOptimized: "320",
  "theme-color": "#111",
  "apple-mobile-web-app-capable": "yes",
  "apple-mobile-web-app-status-bar-style": "black-transparent",
  "apple-mobile-web-app-title": "Santi Dalmasso",
  "mobile-web-app-capable": "yes",
  "og:locale": "en",
  "og:site_name": "Santi Dalmasso",
  "og:type": "website",
  "twitter:card": "summary_large_image",
  "twitter:creator": "@santidalmasso",
  "twitter:site": "@santidalmasso",
  "X-UA-Compatible": "IE=edge,chrome=1",
});

export const links = () => [
  { rel: "preload", as: "style", href: styles },
  { rel: "preload", as: "style", href: global },
  { rel: "stylesheet", href: styles },
  { rel: "stylesheet", href: global },
];

export const loader = () => {
  return {
    ENV: {
      ANALYTICS_ID: process.env.VERCEL_ANALYTICS_ID,
    },
  };
};

function Document({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Analytics />
      </body>
    </html>
  );
}

declare global {
  interface Window {
    ENV: SerializeFrom<typeof loader>["ENV"];
  }
}

export default function App() {
  const { ENV } = useLoaderData<typeof loader>();
  return (
    <Document>
      <Outlet />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.ENV = ${JSON.stringify(ENV)}`,
        }}
      />
    </Document>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <Document>
      <main className="text-white/90">
        <div className="min-h-[calc(100vh-5.5rem)] w-full flex flex-col justify-start pt-20 md:pt-0 md:justify-center items-center">
          <h1 className="text-[120px] md:text-[180px] md:leading-[200px] font-bold">
            {caught.status}
          </h1>
          <p className="text-white/50 text-4xl md:text-5xl">
            {caught.statusText}!
          </p>
          <p className="text-white/40 my-4">
            We couldn't find the page you were looking for.
          </p>
          <Link to="/" className="text-white/80 text-sm">
            <div className="p-4">← Go Back</div>
          </Link>
        </div>
      </main>
    </Document>
  );
}
