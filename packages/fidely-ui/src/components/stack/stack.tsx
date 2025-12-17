'use client'

import { forwardRef } from 'react'
import { type PolymorphicProps } from '@ark-ui/react'
import { ark } from '@ark-ui/react/factory'
import { HTMLStyledProps, styled } from '@fidely-ui/styled-system/jsx'
import { stack, type StackProperties } from '@fidely-ui/styled-system/patterns'

import { splitProps } from '../../utils/split-props'

export interface StackProps
  extends Omit<HTMLStyledProps<'div'>, keyof StackProperties>,
    StackProperties,
    PolymorphicProps {}

const StyledStack = styled(ark.div)

/**
 * Stack component
 *
 * Provides a flexible box layout system using Panda's stack pattern.
 */
export const Stack = forwardRef<HTMLDivElement, StackProps>(
  function Stack(props, ref) {
    const [patternProps, restProps] = splitProps(props, [
      'align',
      'justify',
      'direction',
      'gap',
    ])

    const styles = stack.raw(patternProps)

    return <StyledStack ref={ref} {...styles} {...restProps} />
  }
)

Stack.displayName = 'Stack'
