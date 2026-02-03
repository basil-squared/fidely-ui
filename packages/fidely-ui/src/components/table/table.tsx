'use client'

import { forwardRef } from 'react'
import type { Assign, PolymorphicProps } from '@ark-ui/react'
import { ark } from '@ark-ui/react/factory'
import { styled } from 'styled-system/jsx'
import type { HTMLStyledProps, UnstyledProps } from 'styled-system/types'
import { table, type TableVariantProps } from 'styled-system/recipes'
import { cx } from 'styled-system/css'

import { makeStyleContext } from '../../system/make-style-context'

const { withSlotProvider, withSlotContext } = makeStyleContext(table)

// -------------------- Root --------------------
export interface TableRootProps
  extends
    Assign<HTMLStyledProps<'table'>, PolymorphicProps>,
    TableVariantProps,
    UnstyledProps {}

export const TableRoot = withSlotProvider<HTMLTableElement, TableRootProps>(
  ark.table,
  'root'
)

// -------------------- Body --------------------
export interface TableBodyProps
  extends Assign<HTMLStyledProps<'tbody'>, PolymorphicProps>, UnstyledProps {}

export const TableBody = withSlotContext<
  HTMLTableSectionElement,
  TableRootProps
>(ark.tbody, 'body')

// -------------------- Header --------------------
export interface TableHeaderProps
  extends Assign<HTMLStyledProps<'thead'>, PolymorphicProps>, UnstyledProps {}

export const TableHeader = withSlotContext<
  HTMLTableSectionElement,
  TableHeaderProps
>(ark.thead, 'header')

// -------------------- Footer --------------------
export interface TableFooterProps
  extends Assign<HTMLStyledProps<'tfoot'>, PolymorphicProps>, UnstyledProps {}

export const TableFooter = withSlotContext<
  HTMLTableSectionElement,
  TableFooterProps
>(ark.tfoot, 'footer')

// -------------------- Row --------------------
export interface TableRowProps
  extends Assign<HTMLStyledProps<'tr'>, PolymorphicProps>, UnstyledProps {}

export const TableRow = withSlotContext<HTMLTableSectionElement, TableRowProps>(
  ark.tr,
  'row'
)

// -------------------- HeadCell --------------------
export interface TableHeadCellProps
  extends Assign<HTMLStyledProps<'th'>, PolymorphicProps>, UnstyledProps {}

export const TableHeadCell = withSlotContext<
  HTMLTableSectionElement,
  TableHeadCellProps
>(ark.th, 'headCell')

// -------------------- Cell --------------------
export interface TableCellProps
  extends Assign<HTMLStyledProps<'td'>, PolymorphicProps>, UnstyledProps {}

export const TableCell = withSlotContext<HTMLTableCellElement, TableCellProps>(
  ark.td,
  'cell'
)

// -------------------- Caption --------------------
export interface TableCaptionProps
  extends Assign<HTMLStyledProps<'caption'>, PolymorphicProps>, UnstyledProps {}

export const TableCaption = withSlotContext<
  HTMLTableCaptionElement,
  TableCaptionProps
>(ark.caption, 'caption')

// -------------------- ScrollArea --------------------
export interface TableScrollAreaProps
  extends HTMLStyledProps<'div'>, UnstyledProps {}

export const TableScrollArea = forwardRef<HTMLDivElement, TableScrollAreaProps>(
  function TableScrollArea(props, ref) {
    const slotStyles = table().scrollArea

    return (
      <styled.div
        ref={ref}
        className={cx(slotStyles, props.className)}
        {...props}
      />
    )
  }
)
