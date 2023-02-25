import type { EntryContext } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToString } from "react-dom/server";
import { IsBotProvider } from "~/contexts/IsBotProvider";

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const markup = renderToString(
    <IsBotProvider isBot={isbot(request.headers.get("User-Agent") ?? "")}>
      <RemixServer context={remixContext} url={request.url} />
    </IsBotProvider>
  );

  responseHeaders.set("Content-Type", "text/html");

  return new Response("<!DOCTYPE html>" + markup, {
    headers: responseHeaders,
    status: responseStatusCode,
  });
}
