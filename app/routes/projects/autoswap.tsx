import type {MetaFunction} from '@remix-run/node'
import {Fragment} from 'react'
import {useTranslation} from 'react-i18next'

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'AutoSwap | Santi Dalmasso',
  viewport: 'width=device-width,initial-scale=1',
})

export function headers() {
  return {
    'Cache-Control': `public, max-age=${
      60 * 60 * 24
    } , stale-while-revalidate=${60 * 60 * 24 * 100}`,
  }
}

export const handle = {i18n: ['autoswap', 'index']}

export default function AutoSwap() {
  const {t} = useTranslation('autoswap')
  const items = t('features.items', {returnObjects: true})
  const requirements = Array.isArray(items) ? items : []
  return (
    <Fragment>
      <p>{t('description.first')}</p>
      <p className="mt-4">{t('description.second')}</p>
      <h2 className="mt-10 mb-2 text-xl font-bold text-white md:text-2xl">
        {t('features.title')}
      </h2>
      <p>{t('features.description')}</p>
      <ul className="mx-8 mt-6">
        {requirements.map((r, i) => (
          <li className="list-item" key={i}>
            <p className="font-normal">{r}</p>
          </li>
        ))}
      </ul>

      <div className="flex justify-center w-full gap-2 my-10 mb-14">
        <video
          className="w-[calc(33%-1rem)]"
          playsInline
          loop
          autoPlay
          src="/videos/autoswap-cars.mp4"
        />
        <video
          className="w-[calc(33%-1rem)]"
          playsInline
          loop
          autoPlay
          src="/videos/autoswap-checklist.mp4"
        />
        <video
          className="w-[calc(33%-1rem)]"
          playsInline
          loop
          autoPlay
          src="/videos/autoswap-checkout.mp4"
        />
      </div>

      <h2 className="mt-10 mb-2 text-xl font-bold text-white md:text-2xl">
        {t('design.title')}
      </h2>
      <p>{t('design.description')}</p>
      <h2 className="mt-10 mb-2 text-xl font-bold text-white md:text-2xl">
        {t('code.title')}
      </h2>
      <p className="mb-4">{t('code.backend')}</p>
      <p className="mb-4">{t('code.frontend')}</p>
      <p>{t('code.database')}</p>
      <video
        className="w-full mt-8 mb-14"
        playsInline
        loop
        autoPlay
        src="/videos/publish-car.mp4"
      />
      <h2 className="mt-10 mb-2 text-xl font-bold text-white md:text-2xl">
        {t('deploy.title')}
      </h2>
      <p className="mb-4">{t('deploy.description')}</p>
      <p>{t('deploy.containers')}</p>
      <h2 className="mt-10 mb-2 text-xl font-bold text-white md:text-2xl">
        {t('external.title')}
      </h2>
      <p className="mb-4">{t('external.payments')}</p>
      <p className="mb-4">{t('external.oauth')}</p>
      <p>{t('external.maps')}</p>
    </Fragment>
  )
}
