'use client'

import { forwardRef } from 'react'
import { type PolymorphicProps } from '@ark-ui/react'
import { ark } from '@ark-ui/react/factory'
import { HTMLStyledProps, styled } from '@fidely-ui/styled-system/jsx'
import {
  center,
  type CenterProperties,
} from '@fidely-ui/styled-system/patterns'

import { splitProps } from '../../utils/split-props'

export interface CenterProps
  extends Omit<HTMLStyledProps<'div'>, keyof CenterProperties>,
    CenterProperties,
    PolymorphicProps {}

const StyledCenter = styled(ark.div)

/**
 * Center component
 *
 * Provides a flexible box layout system using Panda's center pattern.
 */
export const Center = forwardRef<HTMLDivElement, CenterProps>(
  function Center(props, ref) {
    const [patternProps, restProps] = splitProps(props, ['inline'])

    const styles = center.raw(patternProps)

    return <StyledCenter ref={ref} {...styles} {...restProps} />
  }
)

Center.displayName = 'Center'
