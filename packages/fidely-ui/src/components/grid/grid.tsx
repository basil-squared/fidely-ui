'use client'

import { forwardRef } from 'react'
import { type PolymorphicProps } from '@ark-ui/react'
import { ark } from '@ark-ui/react/factory'
import { HTMLStyledProps, styled } from '@fidely-ui/styled-system/jsx'
import { grid, type GridProperties } from '@fidely-ui/styled-system/patterns'

import { splitProps } from '../../utils/split-props'

export interface GridProps
  extends Omit<HTMLStyledProps<'div'>, keyof GridProperties>,
    GridProperties,
    PolymorphicProps {}

const StyledGrid = styled(ark.div)

/**
 * Grid component
 *
 * Provides a flexible box layout system using Panda's grid pattern.
 */
export const Grid = forwardRef<HTMLDivElement, GridProps>(
  function Grid(props, ref) {
    const [patternProps, restProps] = splitProps(props, [
      'minChildWidth',
      'rowGap',
      'columnGap',
      'columns',
      'gap',
    ])

    const styles = grid.raw(patternProps)

    return <StyledGrid ref={ref} {...styles} {...restProps} />
  }
)

Grid.displayName = 'Grid'
