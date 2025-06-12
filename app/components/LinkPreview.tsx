'use client'

import * as HoverCard from '@radix-ui/react-hover-card'
import Link from 'next/link'
import type {FC} from 'react'

interface LinkPreviewProps {
  href: string
  imageSrc: string
  alt: string
  children: React.ReactNode
  blank?: boolean
}

export const LinkPreview: FC<LinkPreviewProps> = ({
  children,
  imageSrc,
  href,
  alt,
  blank = true,
}) => {
  const isExternal = href.startsWith('http')
  const LinkComponent = isExternal ? 'a' : Link
  const linkProps = isExternal ? {href} : {href}
  return (
    <HoverCard.Root openDelay={0} closeDelay={300}>
      <HoverCard.Trigger className="cursor-pointer" asChild>
        <LinkComponent {...linkProps} {...(blank ? {target: '_blank'} : {})}>
          {children}
        </LinkComponent>
      </HoverCard.Trigger>
      <HoverCard.Content
        side="top"
        className=" rounded-xl bg-gray/30 border-1 backdrop-blur border-white/20 overflow-hidden shadow-2xl preview-animation pointer-events-none"
        style={{boxShadow: '0 5px 10px rgba(0,0,0,0.12)'}}
      >
        <div
          className="m-2 rounded-lg overflow-hidden border-box preview-animation"
          style={{height: '144px', width: '224px'}}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imageSrc} width={224} height={168} alt={alt} />
        </div>
        <HoverCard.Arrow height={20} fill="none" />
      </HoverCard.Content>
    </HoverCard.Root>
  )
}
