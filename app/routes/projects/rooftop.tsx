import type {MetaFunction} from '@remix-run/node'
import {useTranslation} from 'react-i18next'

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Rooftop | Santi Dalmasso',
  viewport: 'width=device-width,initial-scale=1',
})

export function headers() {
  return {
    'Cache-Control': `public, max-age=${
      60 * 60 * 24
    } , stale-while-revalidate=${60 * 60 * 24 * 100}`,
  }
}

export const handle = {i18n: ['rooftop', 'index']}

export default function Rooftop() {
  const {t} = useTranslation('rooftop')
  return (
    <section>
      <p className="mb-4">{t('description.first')}</p>
      <p>{t('description.second')}</p>
      <h2 className="mt-10 mb-2 text-xl font-bold text-white md:text-2xl">
        {t('funka.title')}
      </h2>
      <p className="mb-4">{t('funka.first')}</p>
      <p>{t('funka.second')}</p>

      <h2 className="mt-10 mb-2 text-xl font-bold text-white md:text-2xl">
        {t('landing.title')}
      </h2>
      <p className="mb-4">{t('landing.description')}</p>
      <video
        className="w-full mt-8 mb-14"
        playsInline
        loop
        autoPlay
        src="/videos/rooftop-landing.mp4"
      />

      <h2 className="mt-10 mb-2 text-xl font-bold text-white md:text-2xl">
        {t('internal.title')}
      </h2>
      <p className="mb-4">{t('internal.first')}</p>
      <p>{t('internal.second')}</p>
      <h2 className="mt-10 mb-2 text-xl font-bold text-white md:text-2xl">
        {t('ui.title')}
      </h2>
      <p className="mb-4">{t('ui.first')}</p>
      <p>{t('ui.second')}</p>
      <h2 className="mt-10 mb-2 text-xl font-bold text-white md:text-2xl">
        {t('practices.title')}
      </h2>
      <p className="mb-4">{t('practices.description')}</p>
      <p>{t('practices.methodology')}</p>
      <video
        className="w-full mt-8"
        playsInline
        loop
        autoPlay
        src="/videos/rooftop-design-system.mp4"
      />
    </section>
  )
}
