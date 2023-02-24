import styles from "~/styles/app.css";
import global from "~/styles/global.css";
import type { MetaFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "@remix-run/react";
import { Footer } from "./components/Footer";

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

function Document({
  children,
  title = `Remix: So great, it's funny!`,
}: {
  children: React.ReactNode;
  title?: string;
}) {
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
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

export function CatchBoundary() {
  const caught = useCatch();
  console.log(caught);

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
