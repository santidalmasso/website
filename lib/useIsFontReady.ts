import { useEffect, useState } from "react"

export function useIsFontReady() {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    document.fonts.ready.then(() => {
      setIsReady(true)
    })
  }, [])

  return isReady
}
