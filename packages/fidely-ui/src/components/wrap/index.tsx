'use client'

import { forwardRef } from 'react'
import { type PolymorphicProps } from '@ark-ui/react'
import { ark } from '@ark-ui/react/factory'
import { styled } from 'styled-system/jsx'
import { type HTMLStyledProps } from 'styled-system/types'
import { wrap, type WrapProperties } from 'styled-system/patterns'

import { splitProps } from '../../utils/split-props'

export interface WrapProps
  extends
    Omit<HTMLStyledProps<'div'>, keyof WrapProperties>,
    WrapProperties,
    PolymorphicProps {}

const StyledWrap = styled(ark.div)

/**
 * Wrap component
 *
 * Provides a flexible box layout system using Panda's wrap pattern.
 */
export const Wrap = forwardRef<HTMLDivElement, WrapProps>(
  function Wrap(props, ref) {
    const [patternProps, restProps] = splitProps(props, [
      'align',
      'justify',
      'gap',
      'columnGap',
      'rowGap',
    ])

    const styles = wrap.raw(patternProps)

    return <StyledWrap ref={ref} {...styles} {...restProps} />
  }
)

Wrap.displayName = 'Wrap'
