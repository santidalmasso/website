import type {EntryContext} from '@remix-run/node'
import {PassThrough} from 'stream'
import {RemixServer} from '@remix-run/react'
import isbot from 'isbot'
import {renderToPipeableStream} from 'react-dom/server'
import {IsBotProvider} from '~/contexts/IsBotProvider'

const ABORT_DELAY = 5000

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  if (isbot(request.headers.get('user-agent'))) {
    return serveTheBots(
      request,
      responseStatusCode,
      responseHeaders,
      remixContext,
    )
  }

  return serveBrowsers(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext,
  )
}

function serveTheBots(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  return new Promise((resolve, reject) => {
    const {pipe, abort} = renderToPipeableStream(
      <IsBotProvider isBot={isbot(request.headers.get('User-Agent') ?? '')}>
        <RemixServer
          context={remixContext}
          url={request.url}
          abortDelay={ABORT_DELAY}
        />
      </IsBotProvider>,
      {
        // Use onAllReady to wait for the entire document to be ready
        onAllReady() {
          responseHeaders.set('Content-Type', 'text/html')
          let body = new PassThrough()
          pipe(body)
          resolve(
            new Response(body, {
              status: responseStatusCode,
              headers: responseHeaders,
            }),
          )
        },
        onShellError(err: unknown) {
          reject(err)
        },
      },
    )
    setTimeout(abort, ABORT_DELAY)
  })
}

function serveBrowsers(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  return new Promise((resolve, reject) => {
    let didError = false
    const {pipe, abort} = renderToPipeableStream(
      <IsBotProvider isBot={isbot(request.headers.get('User-Agent') ?? '')}>
        <RemixServer
          context={remixContext}
          url={request.url}
          abortDelay={ABORT_DELAY}
        />
      </IsBotProvider>,
      {
        // use onShellReady to wait until a suspense boundary is triggered
        onShellReady() {
          responseHeaders.set('Content-Type', 'text/html')
          let body = new PassThrough()
          pipe(body)
          resolve(
            new Response(body, {
              status: didError ? 500 : responseStatusCode,
              headers: responseHeaders,
            }),
          )
        },
        onShellError(err: unknown) {
          reject(err)
        },
        onError(err: unknown) {
          didError = true
          console.error(err)
        },
      },
    )
    setTimeout(abort, ABORT_DELAY)
  })
}
