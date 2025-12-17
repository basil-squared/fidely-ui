'use client'

import { forwardRef } from 'react'
import { type PolymorphicProps } from '@ark-ui/react'
import { ark } from '@ark-ui/react/factory'
import { styled } from '@fidely-ui/styled-system/jsx'
import { type HTMLStyledProps } from '@fidely-ui/styled-system/types'
import {
  heading,
  type HeadingVariantProps,
} from '@fidely-ui/styled-system/recipes'

export interface HeadingProps
  extends HTMLStyledProps<'h2'>,
    HeadingVariantProps,
    PolymorphicProps {}

const StyledHeading = styled(ark.h2, heading)

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  function Heading(props, ref) {
    return <StyledHeading ref={ref} {...props} />
  }
)

Heading.displayName = 'Heading'
