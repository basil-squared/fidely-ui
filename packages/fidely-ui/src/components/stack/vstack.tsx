'use client'

import { forwardRef } from 'react'
import { type PolymorphicProps } from '@ark-ui/react'
import { ark } from '@ark-ui/react/factory'
import { HTMLStyledProps, styled } from '@fidely-ui/styled-system/jsx'
import {
  vstack,
  type VstackProperties,
} from '@fidely-ui/styled-system/patterns'

import { splitProps } from '../../utils/split-props'

export interface VStackProps
  extends Omit<HTMLStyledProps<'div'>, keyof VstackProperties>,
    VstackProperties,
    PolymorphicProps {}

const StyledVStack = styled(ark.div)

/**
 * VStackProps component
 *
 * Provides a flexible box layout system using Panda's vstack pattern.
 */
export const VStack = forwardRef<HTMLDivElement, VStackProps>(
  function Stack(props, ref) {
    const [patternProps, restProps] = splitProps(props, ['direction'])

    const styles = vstack.raw(patternProps)

    return <StyledVStack ref={ref} {...styles} {...restProps} />
  }
)

VStack.displayName = 'VStack'
