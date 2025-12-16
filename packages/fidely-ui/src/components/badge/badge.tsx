'use client'

import { forwardRef } from 'react'
import type { Assign, PolymorphicProps } from '@ark-ui/react'
import { ark } from '@ark-ui/react/factory'
import { styled } from '@fidely-ui/styled-system/jsx'
import { badge, BadgeVariantProps } from '@fidely-ui/styled-system/recipes'
import { type HTMLStyledProps } from '@fidely-ui/styled-system/types'

export interface BadgeProps
  extends Assign<HTMLStyledProps<'span'>, BadgeVariantProps>,
    PolymorphicProps {}

const StyledBadge = styled(ark.span, badge)

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  function Bagde(props, ref) {
    const { asChild, ...rest } = props

    return <StyledBadge ref={ref} {...rest} />
  }
)

Badge.displayName = 'Badge'
