'use client'

import { forwardRef } from 'react'
import { type PolymorphicProps } from '@ark-ui/react'
import { ark } from '@ark-ui/react/factory'
import { styled } from 'styled-system/jsx'
import { badge, BadgeVariantProps } from 'styled-system/recipes'
import { type HTMLStyledProps } from 'styled-system/types'

export interface BadgeProps
  extends HTMLStyledProps<'span'>, BadgeVariantProps, PolymorphicProps {}

const StyledBadge = styled(ark.span, badge)

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  function Badge(props, ref) {
    return <StyledBadge ref={ref} {...props} />
  }
)

Badge.displayName = 'Badge'
