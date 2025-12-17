'use client'

import { forwardRef } from 'react'
import { type PolymorphicProps } from '@ark-ui/react'
import { ark } from '@ark-ui/react/factory'
import { HTMLStyledProps, styled } from '@fidely-ui/styled-system/jsx'
import { hstack, type HstackStyles } from '@fidely-ui/styled-system/patterns'

import { splitProps } from '../../utils/split-props'

export interface HStackProps
  extends Omit<HTMLStyledProps<'div'>, keyof HstackStyles>,
    HstackStyles,
    PolymorphicProps {}

const StyledHStack = styled(ark.div)

/**
 * HStack component
 *
 * Provides a flexible box layout system using Panda's hstack pattern.
 */
export const HStack = forwardRef<HTMLDivElement, HStackProps>(
  function HStack(props, ref) {
    const [patternProps, restProps] = splitProps(props, ['direction'])

    const styles = hstack.raw(patternProps)

    return <StyledHStack ref={ref} {...styles} {...restProps} />
  }
)

HStack.displayName = 'HStack'
