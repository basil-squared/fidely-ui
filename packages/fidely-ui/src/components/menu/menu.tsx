'use client'

import type { Assign } from '@ark-ui/react'
import { Menu as ArkMenu } from '@ark-ui/react/menu'
import { menu, type MenuVariantProps } from '@fidely-ui/styled-system/recipes'
import type { HTMLStyledProps } from '@fidely-ui/styled-system/jsx'

import { makeStyleContext } from '../../system/make-style-context'
import { FiCaretDownIcon } from '../icons/FiCaretDownIcon'

const { withSlotRootProvider, withSlotContext } = makeStyleContext(menu)

// -------------------- RootProvider --------------------
export interface MenuRootProviderProps
  extends Assign<
    Assign<HTMLStyledProps<'div'>, ArkMenu.RootProviderBaseProps>,
    MenuVariantProps
  > {}

export const MenuRootProvider = withSlotRootProvider<MenuRootProviderProps>(
  ArkMenu.RootProvider
)

// -------------------- Root --------------------
export interface MenuRootProps
  extends Assign<
    Assign<HTMLStyledProps<'div'>, ArkMenu.RootBaseProps>,
    MenuVariantProps
  > {}

export const MenuRoot = withSlotRootProvider<MenuRootProps>(ArkMenu.Root)

// -------------------- Content --------------------
export interface MenuContentProps
  extends Assign<HTMLStyledProps<'div'>, ArkMenu.ContentBaseProps> {}

export const MenuContent = withSlotContext<HTMLDivElement, MenuContentProps>(
  ArkMenu.Content,
  'content'
)

// -------------------- Trigger --------------------
export interface MenuTriggerProps
  extends Assign<HTMLStyledProps<'button'>, ArkMenu.TriggerBaseProps> {}

export const MenuTrigger = withSlotContext<HTMLDivElement, MenuTriggerProps>(
  ArkMenu.Trigger,
  'trigger'
)

// -------------------- ContextTrigger --------------------
export interface MenuContextTriggerProps
  extends Assign<HTMLStyledProps<'button'>, ArkMenu.ContextTriggerBaseProps> {}

export const MenuContextTrigger = withSlotContext<
  HTMLDivElement,
  MenuContextTriggerProps
>(ArkMenu.ContextTrigger, 'contextTrigger')

// -------------------- TriggerItem --------------------
export interface MenuTriggerItemProps
  extends Assign<HTMLStyledProps<'div'>, ArkMenu.TriggerItemBaseProps> {}

export const MenuTriggerItem = withSlotContext<
  HTMLDivElement,
  MenuTriggerItemProps
>(ArkMenu.TriggerItem, 'triggerItem')

// -------------------- Separator --------------------
export interface MenuSeparatorProps
  extends Assign<HTMLStyledProps<'hr'>, ArkMenu.SeparatorBaseProps> {}

export const MenuSeparator = withSlotContext<
  HTMLDivElement,
  MenuSeparatorProps
>(ArkMenu.Separator, 'separator')

// -------------------- Positioner --------------------
export interface MenuPositionerProps
  extends Assign<HTMLStyledProps<'div'>, ArkMenu.PositionerBaseProps> {}

export const MenuPositioner = withSlotContext<
  HTMLDivElement,
  MenuPositionerProps
>(ArkMenu.Positioner, 'positioner')

// -------------------- Item --------------------
export interface MenuItemProps
  extends Assign<HTMLStyledProps<'div'>, ArkMenu.ItemBaseProps> {}

export const MenuItem = withSlotContext<HTMLDivElement, MenuItemProps>(
  ArkMenu.Item,
  'item'
)

// -------------------- ItemText --------------------
export interface MenuItemTextProps
  extends Assign<HTMLStyledProps<'div'>, ArkMenu.ItemTextBaseProps> {}

export const MenuItemText = withSlotContext<HTMLDivElement, MenuItemTextProps>(
  ArkMenu.ItemText,
  'itemText'
)

// -------------------- ItemGroup --------------------
export interface MenuItemGroupProps
  extends Assign<HTMLStyledProps<'div'>, ArkMenu.ItemGroupProps> {}

export const MenuItemGroup = withSlotContext<
  HTMLDivElement,
  MenuItemGroupProps
>(ArkMenu.ItemGroup, 'itemGroup')

// -------------------- ItemGroupLabel --------------------
export interface MenuItemGroupLabelProps
  extends Assign<HTMLStyledProps<'div'>, ArkMenu.ItemGroupLabelBaseProps> {}

export const MenuItemGroupLabel = withSlotContext<
  HTMLDivElement,
  MenuItemGroupLabelProps
>(ArkMenu.ItemGroupLabel, 'itemGroupLabel')

// -------------------- CheckboxItem --------------------
export interface MenuCheckboxItemProps
  extends Assign<HTMLStyledProps<'div'>, ArkMenu.CheckboxItemBaseProps> {}

export const MenuCheckboxItem = withSlotContext<
  HTMLDivElement,
  MenuCheckboxItemProps
>(ArkMenu.CheckboxItem, 'item')

// -------------------- RadioItem --------------------
export interface MenuRadioItemProps
  extends Assign<HTMLStyledProps<'div'>, ArkMenu.RadioItemBaseProps> {}

export const MenuRadioItem = withSlotContext<
  HTMLDivElement,
  MenuRadioItemProps
>(ArkMenu.RadioItem, 'item')

// -------------------- RadioItemGroup --------------------
export interface MenuRadioItemGroupProps
  extends Assign<HTMLStyledProps<'div'>, ArkMenu.RadioItemGroupBaseProps> {}

export const MenuRadioItemGroup = withSlotContext<
  HTMLDivElement,
  MenuRadioItemGroupProps
>(ArkMenu.RadioItemGroup, 'item')

// -------------------- Indicator --------------------
export interface MenuIndicatorProps
  extends Assign<HTMLStyledProps<'div'>, ArkMenu.IndicatorBaseProps> {}

export const MenuIndicator = withSlotContext<
  HTMLDivElement,
  MenuIndicatorProps
>((props) => {
  const { idleIcon = <FiCaretDownIcon />, children, ...rest } = props

  return <ArkMenu.Indicator {...rest}>{children ?? idleIcon}</ArkMenu.Indicator>
}, 'indicator')

// -------------------- ItemIndicator --------------------
export interface MenuItemIndicatorProps
  extends Assign<HTMLStyledProps<'div'>, ArkMenu.ItemIndicatorBaseProps> {}

export const MenuItemIndicator = withSlotContext<
  HTMLDivElement,
  MenuItemIndicatorProps
>(ArkMenu.ItemIndicator, 'itemIndicator')

// -------------------- MenuArrow --------------------
export interface MenuArrowProps
  extends Assign<HTMLStyledProps<'div'>, ArkMenu.ArrowBaseProps> {}

export const MenuArrow = withSlotContext<HTMLDivElement, MenuArrowProps>(
  ArkMenu.Arrow,
  'arrow'
)

// -------------------- MenuArrowTip --------------------
export interface MenuArrowTipProps
  extends Assign<HTMLStyledProps<'div'>, ArkMenu.ArrowTipBaseProps> {}

export const MenuArrowTip = withSlotContext<HTMLDivElement, MenuArrowTipProps>(
  ArkMenu.ArrowTip,
  'arrowTip'
)

// -------------------- Context --------------------
export const MenuContext = ArkMenu.Context
export const MenuItemContext = ArkMenu.ItemContext

export interface MenuSelectionDetails extends ArkMenu.SelectionDetails {}
export interface MenuOpenChangeDetails extends ArkMenu.OpenChangeDetails {}
export interface MenuHighlightChangeDetails
  extends ArkMenu.HighlightChangeDetails {}
