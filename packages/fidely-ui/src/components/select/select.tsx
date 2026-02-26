'use client'

import type { Assign, CollectionItem } from '@ark-ui/react'
import { Select as ArkSelect } from '@ark-ui/react/select'
import { type HTMLStyledProps } from 'styled-system/types'
import { select, type SelectVariantProps } from 'styled-system/recipes'

import { makeStyleContext } from '../../system/make-style-context'
import { FiClose } from '../../icons/FiClose'
import { FiCaretDownIcon } from '../../icons/FiCaretDownIcon'

const { withSlotProvider, withSlotContext } = makeStyleContext(select)

// -------------------- RootProvider --------------------
export interface SelectRootProviderProps<
  T extends CollectionItem = any,
> extends Assign<
  Assign<HTMLStyledProps<'div'>, ArkSelect.RootProviderBaseProps<T>>,
  SelectVariantProps
> {}

export const SelectRootProvider = withSlotProvider<
  HTMLDivElement,
  SelectRootProviderProps
>(ArkSelect.RootProvider, 'root')

// -------------------- Root --------------------
export interface SelectRootProps<T extends CollectionItem = any> extends Assign<
  Assign<HTMLStyledProps<'div'>, ArkSelect.RootBaseProps<T>>,
  SelectVariantProps
> {}

export const SelectRoot = withSlotProvider<HTMLDivElement, SelectRootProps>(
  ArkSelect.Root,
  'root'
)

// -------------------- Control --------------------
export interface SelectControlProps extends Assign<
  HTMLStyledProps<'div'>,
  ArkSelect.ControlBaseProps
> {}

export const SelectControl = withSlotContext<
  HTMLDivElement,
  SelectControlProps
>(ArkSelect.Control, 'control')

// -------------------- Content --------------------
export interface SelectContentProps extends Assign<
  HTMLStyledProps<'div'>,
  ArkSelect.ContentBaseProps
> {}

export const SelectContent = withSlotContext<
  HTMLDivElement,
  SelectContentProps
>(ArkSelect.Content, 'content')

// -------------------- ClearTrigger --------------------
export interface SelectClearTriggerProps extends Assign<
  HTMLStyledProps<'button'>,
  ArkSelect.ClearTriggerBaseProps
> {
  idleIcon?: React.ReactNode
}

export const SelectClearTrigger = withSlotContext<
  HTMLButtonElement,
  SelectClearTriggerProps
>((props) => {
  const { idleIcon = <FiClose size={18} />, children, ...rest } = props

  return (
    <ArkSelect.ClearTrigger {...rest}>
      {children ?? idleIcon}
    </ArkSelect.ClearTrigger>
  )
}, 'clearTrigger')

// -------------------- Trigger --------------------
export interface SelectTriggerProps extends Assign<
  HTMLStyledProps<'button'>,
  ArkSelect.TriggerBaseProps
> {}

export const SelectTrigger = withSlotContext<
  HTMLButtonElement,
  SelectTriggerProps
>(ArkSelect.Trigger, 'trigger')

// -------------------- Indicator --------------------
export interface SelectIndicatorProps extends Assign<
  HTMLStyledProps<'div'>,
  ArkSelect.IndicatorBaseProps
> {
  idleIcon?: React.ReactNode
}

export const SelectIndicator = withSlotContext<
  HTMLDivElement,
  SelectIndicatorProps
>((props) => {
  const { idleIcon = <FiCaretDownIcon size={18} />, children, ...rest } = props

  return (
    <ArkSelect.Indicator {...rest}>{children ?? idleIcon}</ArkSelect.Indicator>
  )
}, 'indicator')

// -------------------- IndicatorGroup --------------------
export interface SelectIndicatorGroupProps extends HTMLStyledProps<'div'> {}

export const SelectIndicatorGroup = withSlotContext<
  HTMLDivElement,
  SelectIndicatorGroupProps
>('div', 'indicatorGroup')

// -------------------- Label --------------------
export interface SelectLabelProps extends Assign<
  HTMLStyledProps<'label'>,
  ArkSelect.LabelBaseProps
> {}

export const SelectLabel = withSlotContext<HTMLLabelElement, SelectLabelProps>(
  ArkSelect.Label,
  'label'
)

// -------------------- Item --------------------
export interface SelectItemProps extends Assign<
  HTMLStyledProps<'div'>,
  ArkSelect.ItemBaseProps
> {}

export const SelectItem = withSlotContext<HTMLDivElement, SelectItemProps>(
  ArkSelect.Item,
  'item'
)

// -------------------- ItemText --------------------
export interface SelectItemTextProps extends Assign<
  HTMLStyledProps<'span'>,
  ArkSelect.ItemTextBaseProps
> {}

export const SelectItemText = withSlotContext<
  HTMLSpanElement,
  SelectItemTextProps
>(ArkSelect.ItemText, 'itemText')

// -------------------- ItemGroup --------------------
export interface SelectItemGroupProps extends Assign<
  HTMLStyledProps<'div'>,
  ArkSelect.ItemGroupBaseProps
> {}

export const SelectItemGroup = withSlotContext<
  HTMLDivElement,
  SelectItemGroupProps
>(ArkSelect.ItemGroup, 'itemGroup')

// -------------------- ItemGroupLabel --------------------
export interface SelectItemGroupLabelProps extends Assign<
  HTMLStyledProps<'div'>,
  ArkSelect.ItemGroupLabelBaseProps
> {}

export const SelectItemGroupLabel = withSlotContext<
  HTMLDivElement,
  SelectItemGroupLabelProps
>(ArkSelect.ItemGroupLabel, 'itemGroupLabel')

// -------------------- ItemIndicator --------------------
export interface SelectItemIndicatorProps extends Assign<
  HTMLStyledProps<'div'>,
  ArkSelect.ItemIndicatorBaseProps
> {}

export const SelectItemIndicator = withSlotContext<
  HTMLDivElement,
  SelectItemIndicatorProps
>(ArkSelect.ItemIndicator, 'itemIndicator')

// -------------------- List --------------------
export interface SelectListProps extends Assign<
  HTMLStyledProps<'div'>,
  ArkSelect.ListBaseProps
> {}

export const SelectList = withSlotContext<HTMLDivElement, SelectListProps>(
  ArkSelect.List,
  'list'
)

// -------------------- Positioner --------------------
export interface SelectPositionerProps extends Assign<
  HTMLStyledProps<'div'>,
  ArkSelect.PositionerBaseProps
> {}

export const SelectPositioner = withSlotContext<
  HTMLDivElement,
  SelectPositionerProps
>(ArkSelect.Positioner, 'positioner')

// -------------------- ValueText --------------------
export interface SelectValueTextProps extends Assign<
  HTMLStyledProps<'div'>,
  ArkSelect.ValueTextBaseProps
> {}

export const SelectValueText = withSlotContext<
  HTMLDivElement,
  SelectValueTextProps
>(ArkSelect.ValueText, 'valueText')

// -------------------- Context --------------------
export const SelectContext = ArkSelect.Context

export const SelectItemContext = ArkSelect.ItemContext

export const SelectHiddenSelect = ArkSelect.HiddenSelect

export interface SelectValueChangeDetails<
  T extends CollectionItem = any,
> extends ArkSelect.ValueChangeDetails<T> {}

export interface SelectHighlightChangeDetails<
  T extends CollectionItem = any,
> extends ArkSelect.HighlightChangeDetails<T> {}

export interface SelectOpenChangeDetails extends ArkSelect.OpenChangeDetails {}
