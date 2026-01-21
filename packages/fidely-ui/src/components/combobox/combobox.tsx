'use client'

import type { Assign, CollectionItem } from '@ark-ui/react'
import { Combobox as ArkCombobox } from '@ark-ui/react/combobox'
import { combobox, type ComboboxVariantProps } from 'styled-system/recipes'
import { UnstyledProps, type HTMLStyledProps } from 'styled-system/types'

import { makeStyleContext } from '../../system/make-style-context'
import { FiClose } from '../../icons/FiClose'
import { FiCaretDownIcon } from '../../icons/FiCaretDownIcon'

const { withSlotProvider, withSlotContext } = makeStyleContext(combobox)

// -------------------- RootProvider --------------------
export interface ComboboxRootProviderProps<T extends CollectionItem = any>
  extends
    Assign<
      Assign<HTMLStyledProps<'div'>, ArkCombobox.RootProviderBaseProps<T>>,
      ComboboxVariantProps
    >,
    UnstyledProps {}

export const ComboboxRootProvider = withSlotProvider<
  HTMLDivElement,
  ComboboxRootProviderProps
>(ArkCombobox.RootProvider, 'root')

// -------------------- Root --------------------
export interface ComboboxRootProps<T extends CollectionItem = any>
  extends
    Assign<
      Assign<HTMLStyledProps<'div'>, ArkCombobox.RootBaseProps<T>>,
      ComboboxVariantProps
    >,
    UnstyledProps {}

export const ComboboxRoot = withSlotProvider<HTMLDivElement, ComboboxRootProps>(
  ArkCombobox.Root,
  'root'
)

// -------------------- Label --------------------
export interface ComboboxLabelProps
  extends
    Assign<HTMLStyledProps<'label'>, ArkCombobox.LabelBaseProps>,
    UnstyledProps {}

export const ComboboxLabel = withSlotContext<
  HTMLLabelElement,
  ComboboxLabelProps
>(ArkCombobox.Label, 'label')

// -------------------- Control --------------------
export interface ComboboxControlProps
  extends
    Assign<HTMLStyledProps<'div'>, ArkCombobox.ControlBaseProps>,
    UnstyledProps {}

export const ComboboxControl = withSlotContext<
  HTMLDivElement,
  ComboboxControlProps
>(ArkCombobox.Control, 'control')

// -------------------- Input --------------------
export interface ComboboxInputProps
  extends
    Assign<HTMLStyledProps<'input'>, ArkCombobox.InputBaseProps>,
    UnstyledProps {}

export const ComboboxInput = withSlotContext<
  HTMLInputElement,
  ComboboxInputProps
>(ArkCombobox.Input, 'input')

// -------------------- Trigger --------------------
export interface ComboboxTriggerProps
  extends
    Assign<HTMLStyledProps<'button'>, ArkCombobox.TriggerBaseProps>,
    UnstyledProps {
  idleIcon?: React.ReactNode
}

export const ComboboxTrigger = withSlotContext<
  HTMLButtonElement,
  ComboboxTriggerProps
>((props) => {
  const { idleIcon = <FiCaretDownIcon size={18} />, children, ...rest } = props

  return (
    <ArkCombobox.Trigger {...rest}>{children ?? idleIcon}</ArkCombobox.Trigger>
  )
}, 'trigger')

// -------------------- ClearTrigger --------------------
export interface ComboboxClearTriggerProps
  extends
    Assign<HTMLStyledProps<'button'>, ArkCombobox.ClearTriggerBaseProps>,
    UnstyledProps {
  idleIcon?: React.ReactNode
}

export const ComboboxClearTrigger = withSlotContext<
  HTMLButtonElement,
  ComboboxTriggerProps
>((props) => {
  const { idleIcon = <FiClose size={18} />, children, ...rest } = props

  return (
    <ArkCombobox.ClearTrigger {...rest}>
      {children ?? idleIcon}
    </ArkCombobox.ClearTrigger>
  )
}, 'clearTrigger')

// -------------------- Positioner --------------------
export interface ComboboxPositionerProps
  extends
    Assign<HTMLStyledProps<'div'>, ArkCombobox.PositionerBaseProps>,
    UnstyledProps {}

export const ComboboxPositioner = withSlotContext<
  HTMLDivElement,
  ComboboxPositionerProps
>(ArkCombobox.Positioner, 'positioner')

// -------------------- Content --------------------
export interface ComboboxContentProps
  extends
    Assign<HTMLStyledProps<'div'>, ArkCombobox.ContentBaseProps>,
    UnstyledProps {}

export const ComboboxContent = withSlotContext<
  HTMLDivElement,
  ComboboxContentProps
>(ArkCombobox.Content, 'content')

// -------------------- ItemGroup --------------------
export interface ComboboxItemGroupProps
  extends
    Assign<HTMLStyledProps<'div'>, ArkCombobox.ItemGroupBaseProps>,
    UnstyledProps {}

export const ComboboxItemGroup = withSlotContext<
  HTMLDivElement,
  ComboboxItemGroupProps
>(ArkCombobox.ItemGroup, 'itemGroup')

// -------------------- ItemGroupLabel --------------------
export interface ComboboxItemGroupLabelProps
  extends
    Assign<HTMLStyledProps<'div'>, ArkCombobox.ItemGroupLabelBaseProps>,
    UnstyledProps {}

export const ComboboxItemGroupLabel = withSlotContext<
  HTMLDivElement,
  ComboboxItemGroupLabelProps
>(ArkCombobox.ItemGroupLabel, 'itemGroupLabel')

// -------------------- Item --------------------
export interface ComboboxItemProps
  extends
    Assign<HTMLStyledProps<'div'>, ArkCombobox.ItemBaseProps>,
    UnstyledProps {}

export const ComboboxItem = withSlotContext<HTMLDivElement, ComboboxItemProps>(
  ArkCombobox.Item,
  'item'
)

// -------------------- ItemText --------------------
export interface ComboboxItemTextProps
  extends
    Assign<HTMLStyledProps<'span'>, ArkCombobox.ItemTextBaseProps>,
    UnstyledProps {}

export const ComboboxItemText = withSlotContext<
  HTMLSpanElement,
  ComboboxItemTextProps
>(ArkCombobox.ItemText, 'itemText')

// -------------------- ItemIndicator --------------------
export interface ComboboxItemIndicatorProps
  extends
    Assign<HTMLStyledProps<'div'>, ArkCombobox.ItemIndicatorBaseProps>,
    UnstyledProps {}

export const ComboboxItemIndicator = withSlotContext<
  HTMLDivElement,
  ComboboxItemIndicatorProps
>(ArkCombobox.ItemIndicator, 'itemIndicator')

// -------------------- IndicatorGroup --------------------
export interface ComboboxIndicatorGroupProps
  extends HTMLStyledProps<'div'>, UnstyledProps {}

export const ComboboxIndicatorGroup = withSlotContext<
  HTMLDivElement,
  ComboboxIndicatorGroupProps
>('div', 'indicatorGroup')

// -------------------- Empty --------------------
export interface ComboboxEmptyProps
  extends
    Assign<HTMLStyledProps<'div'>, ArkCombobox.EmptyBaseProps>,
    UnstyledProps {}

export const ComboboxEmpty = withSlotContext<
  HTMLDivElement,
  ComboboxEmptyProps
>(ArkCombobox.Empty, 'empty')

// // -------------------- List --------------------
export interface ComboboxListrProps
  extends
    Assign<HTMLStyledProps<'div'>, ArkCombobox.ListBaseProps>,
    UnstyledProps {}

export const ComboboxList = withSlotContext<HTMLDivElement, ComboboxListrProps>(
  ArkCombobox.List,
  'list'
)

// -------------------- Context --------------------
export const ComboboxContext = ArkCombobox.Context
export const ComboboxItemContext = ArkCombobox.ItemContext

export interface ComboboxValueChangeDetails<
  T extends CollectionItem = any,
> extends ArkCombobox.ValueChangeDetails<T> {}

export interface ComboboxHighlightChangeDetails<
  T extends CollectionItem = any,
> extends ArkCombobox.HighlightChangeDetails<T> {}

export interface ComboboxOpenChangeDetails
  extends ArkCombobox.OpenChangeDetails {}

export interface ComboboxInputValueChangeDetails
  extends ArkCombobox.InputValueChangeDetails {}
