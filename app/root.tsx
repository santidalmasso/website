import styles from '~/styles/app.css'
import global from '~/styles/global.css'
import type {LoaderArgs, MetaFunction, SerializeFrom} from '@remix-run/node'
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
} from '@remix-run/react'
import {Footer} from './components/Footer'
import {Analytics} from '@vercel/analytics/react'
import {useIsBot} from './contexts/IsBotProvider'
import {useChangeLanguage} from '~/i18n'
import {useTranslation} from 'react-i18next'
import i18next from '~/i18next.server'

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
  title: 'Santi Dalmasso',
  author: 'Santi Dalmasso',
  HandheldFriendly: 'True',
  pagename: 'Santi Dalmasso',
  MobileOptimized: '320',
  'theme-color': '#111',
  'apple-mobile-web-app-capable': 'yes',
  'apple-mobile-web-app-status-bar-style': 'black-transparent',
  'apple-mobile-web-app-title': 'Santi Dalmasso',
  'mobile-web-app-capable': 'yes',
  'og:locale': 'en',
  'og:site_name': 'Santi Dalmasso',
  'og:type': 'website',
  'twitter:card': 'summary_large_image',
  'twitter:creator': '@santidalmasso',
  'twitter:site': '@santidalmasso',
  'X-UA-Compatible': 'IE=edge,chrome=1',
})

export const links = () => [
  {rel: 'preload', as: 'style', href: styles},
  {rel: 'preload', as: 'style', href: global},
  {rel: 'stylesheet', href: styles},
  {rel: 'stylesheet', href: global},
]

export const loader = async ({request}: LoaderArgs) => {
  const locale = await i18next.getLocale(request)
  console.log(locale)
  return {
    locale,
    ENV: {
      ANALYTICS_ID: process.env.VERCEL_ANALYTICS_ID,
    },
  }
}

function Document({children, lang}: {children: React.ReactNode; lang: string}) {
  let isBot = useIsBot()
  let {i18n} = useTranslation()
  useChangeLanguage(lang)
  return (
    <html lang={lang} dir={i18n.dir()}>
      <head>
        <Meta />
        <meta
          httpEquiv="Content-Security-Policy"
          content="connect-src 'self' vitals.vercel-insights.com vitals.vercel-analytics.com;"
        />
        <Links />
      </head>
      <body>
        {children}
        <Footer />
        <ScrollRestoration />
        {isBot ? null : <Scripts />}
        <LiveReload />
        <Analytics />
      </body>
    </html>
  )
}

declare global {
  interface Window {
    ENV: SerializeFrom<typeof loader>['ENV']
  }
}

export default function App() {
  const {ENV, locale} = useLoaderData<typeof loader>()
  return (
    <Document lang={locale}>
      <Outlet />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.ENV = ${JSON.stringify(ENV)}`,
        }}
      />
    </Document>
  )
}

export function CatchBoundary() {
  const caught = useCatch()

  return (
    <Document lang={'en'}>
      <main className="text-white/90">
        <div className="min-h-[calc(100vh-5.5rem)] w-full flex flex-col justify-start pt-20 md:pt-0 md:justify-center items-center">
          <h1 className="text-[120px] md:text-[180px] md:leading-[200px] font-bold">
            {caught.status}
          </h1>
          <p className="text-4xl text-white/50 md:text-5xl">
            {caught.statusText}!
          </p>
          <p className="my-4 text-white/40">
            We couldn't find the page you were looking for.
          </p>
          <Link to="/" className="text-sm text-white/80">
            <div className="p-4">← Go Back</div>
          </Link>
        </div>
      </main>
    </Document>
  )
}
