'use client'

import { forwardRef } from 'react'
import { type PolymorphicProps } from '@ark-ui/react'
import { ark } from '@ark-ui/react/factory'
import { HTMLStyledProps, styled } from 'styled-system/jsx'
import { gridItem, type GridItemProperties } from 'styled-system/patterns'

import { splitProps } from '../../utils/split-props'

export interface GridItemProps
  extends
    Omit<HTMLStyledProps<'div'>, keyof GridItemProperties>,
    GridItemProperties,
    PolymorphicProps {}

const StyledGridItem = styled(ark.div)

/**
 * GridItem component
 *
 * Provides a flexible box layout system using Panda's gridItem pattern.
 */
export const GridItem = forwardRef<HTMLDivElement, GridItemProps>(
  function GridItem(props, ref) {
    const [patternProps, restProps] = splitProps(props, [
      'colSpan',
      'rowSpan',
      'rowStart',
      'rowEnd',
      'colStart',
      'colEnd',
    ])

    const styles = gridItem.raw(patternProps)

    return <StyledGridItem ref={ref} {...styles} {...restProps} />
  }
)

GridItem.displayName = 'GridItem'
