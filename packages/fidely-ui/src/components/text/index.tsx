'use client'

import { forwardRef } from 'react'
import { type PolymorphicProps } from '@ark-ui/react'
import { ark } from '@ark-ui/react/factory'
import { styled } from 'styled-system/jsx'
import { type HTMLStyledProps } from 'styled-system/types'
import { text, type TextVariantProps } from 'styled-system/recipes'

export interface TextProps
  extends HTMLStyledProps<'p'>, TextVariantProps, PolymorphicProps {}

const StyledText = styled(ark.p, text)

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  function Text(props, ref) {
    return <StyledText ref={ref} {...props} />
  }
)

Text.displayName = 'Text'
