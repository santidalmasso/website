import type {EntryContext} from '@remix-run/node'
import {PassThrough} from 'stream'
import {RemixServer} from '@remix-run/react'
import isbot from 'isbot'
import {renderToPipeableStream} from 'react-dom/server'
import {IsBotProvider} from '~/contexts/IsBotProvider'
import {createInstance} from 'i18next'
import i18next from './i18next.server'
import {I18nextProvider, initReactI18next} from 'react-i18next'
import Backend from 'i18next-fs-backend'
import i18n from './i18n'
import {resolve} from 'node:path'

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

async function serveTheBots(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  let instance = createInstance()
  let lng = await i18next.getLocale(request)
  let ns = i18next.getRouteNamespaces(remixContext)

  await instance
    .use(initReactI18next)
    .use(Backend)
    .init({
      ...i18n,
      lng,
      ns,
      backend: {loadPath: resolve('./public/locales/{{lng}}/{{ns}}.json')},
    })
  return new Promise((resolve, reject) => {
    const {pipe, abort} = renderToPipeableStream(
      <I18nextProvider i18n={instance}>
        <IsBotProvider isBot={isbot(request.headers.get('User-Agent') ?? '')}>
          <RemixServer
            context={remixContext}
            url={request.url}
            abortDelay={ABORT_DELAY}
          />
        </IsBotProvider>
      </I18nextProvider>,
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

async function serveBrowsers(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  let instance = createInstance()
  let lng = await i18next.getLocale(request)
  let ns = i18next.getRouteNamespaces(remixContext)

  await instance
    .use(initReactI18next)
    .use(Backend)
    .init({
      ...i18n,
      lng,
      ns,
      backend: {loadPath: resolve('./public/locales/{{lng}}/{{ns}}.json')},
    })
  return new Promise((resolve, reject) => {
    let didError = false
    const {pipe, abort} = renderToPipeableStream(
      <I18nextProvider i18n={instance}>
        <IsBotProvider isBot={isbot(request.headers.get('User-Agent') ?? '')}>
          <RemixServer
            context={remixContext}
            url={request.url}
            abortDelay={ABORT_DELAY}
          />
        </IsBotProvider>
      </I18nextProvider>,
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
