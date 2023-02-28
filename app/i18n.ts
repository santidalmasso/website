import {useEffect} from 'react'
import {useTranslation} from 'react-i18next'

export default {
  supportedLngs: ['en', 'es'],
  fallbackLng: 'en',
  defaultNS: 'index',
  react: {useSuspense: false},
}

export function useChangeLanguage(locale: string) {
  let {i18n} = useTranslation()
  useEffect(() => {
    i18n.changeLanguage(locale)
  }, [locale, i18n])
}
