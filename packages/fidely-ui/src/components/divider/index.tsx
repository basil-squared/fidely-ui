'use client'

import { forwardRef } from 'react'
import { type PolymorphicProps } from '@ark-ui/react'
import { ark } from '@ark-ui/react/factory'
import { HTMLStyledProps, styled } from 'styled-system/jsx'
import { divider, type DividerProperties } from 'styled-system/patterns'

import { splitProps } from '../../utils/split-props'

export interface DividerProps
  extends
    Omit<HTMLStyledProps<'div'>, keyof DividerProperties>,
    DividerProperties,
    PolymorphicProps {}

const StyledDivider = styled(ark.div)

/**
 * Center component
 *
 * Provides a flexible box layout system using Panda's center pattern.
 */
export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  function Divider(props, ref) {
    const [patternProps, restProps] = splitProps(props, [
      'orientation',
      'thickness',
      'color',
    ])

    const styles = divider.raw(patternProps)

    return <StyledDivider ref={ref} {...styles} {...restProps} />
  }
)

Divider.displayName = 'Divider'
