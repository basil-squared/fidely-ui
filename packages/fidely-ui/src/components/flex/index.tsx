'use client'

import { forwardRef } from 'react'
import { type PolymorphicProps } from '@ark-ui/react'
import { ark } from '@ark-ui/react/factory'
import { styled } from 'styled-system/jsx'
import { type HTMLStyledProps } from 'styled-system/types'
import { flex, type FlexProperties } from 'styled-system/patterns'

import { splitProps } from '../../utils/split-props'

export interface FlexProps
  extends
    Omit<HTMLStyledProps<'div'>, keyof FlexProperties>,
    FlexProperties,
    PolymorphicProps {}

const StyledFlex = styled(ark.div)

/**
 * Flex component
 *
 * Provides a flexible box layout system using Panda's flex pattern.
 */
export const Flex = forwardRef<HTMLDivElement, FlexProps>(
  function Flex(props, ref) {
    const [patternProps, restProps] = splitProps(props, [
      'align',
      'justify',
      'direction',
      'wrap',
      'basis',
      'grow',
      'shrink',
      'gap',
    ])

    const styles = flex.raw(patternProps)

    return <StyledFlex ref={ref} {...styles} {...restProps} />
  }
)

Flex.displayName = 'Flex'
