'use client'

import Link from 'next/link'
import { Image } from '@fidely-ui/react/image'
import { css } from '~/styled-system/css'

export const AppLogo = () => {
  return (
    <Link
      href="/"
      className={css({
        _focusVisible: {
          outline: '2px solid',
          outlineColor: 'colorPalette.default',
          outlineOffset: '2px',
        },
      })}
    >
      <Image src="/app-logo.png" alt="Fidely UI Logo" w="120px" />
    </Link>
  )
}
