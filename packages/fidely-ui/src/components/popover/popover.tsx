'use client'

import type { Assign } from '@ark-ui/react'
import { Popover as ArkPopover } from '@ark-ui/react/popover'
import { popover, type PopoverVariantProps } from 'styled-system/recipes'
import { type HTMLStyledProps } from 'styled-system/types'

import { makeStyleContext } from '../../system/make-style-context'

const { withSlotRootProvider, withSlotContext } = makeStyleContext(popover)

// -------------------- RootProvider --------------------
export interface PopoverRootProviderProps extends Assign<
  Assign<HTMLStyledProps<'div'>, ArkPopover.RootProviderBaseProps>,
  PopoverVariantProps
> {}

export const PopoverRootProvider =
  withSlotRootProvider<PopoverRootProviderProps>(ArkPopover.RootProvider)

// -------------------- Root --------------------
export interface PopoverRootProps extends Assign<
  Assign<HTMLStyledProps<'div'>, ArkPopover.RootBaseProps>,
  PopoverVariantProps
> {}

export const PopoverRoot = withSlotRootProvider<PopoverRootProps>(
  ArkPopover.Root
)

// -------------------- Content --------------------
export interface PopoverContentProps extends Assign<
  HTMLStyledProps<'div'>,
  ArkPopover.ContentBaseProps
> {}

export const PopoverContent = withSlotContext<
  HTMLDivElement,
  PopoverContentProps
>(ArkPopover.Content, 'content')

// -------------------- Trigger --------------------
export interface PopoverTriggerProps extends Assign<
  HTMLStyledProps<'button'>,
  ArkPopover.TriggerBaseProps
> {}

export const PopoverTrigger = withSlotContext<
  HTMLButtonElement,
  PopoverTriggerProps
>(ArkPopover.Trigger, 'trigger')

// -------------------- CloseTrigger --------------------
export interface PopoverCloseTriggerProps extends Assign<
  HTMLStyledProps<'button'>,
  ArkPopover.CloseTriggerBaseProps
> {}

export const PopoverCloseTrigger = withSlotContext<
  HTMLButtonElement,
  PopoverCloseTriggerProps
>(ArkPopover.CloseTrigger, 'closeTrigger')

// -------------------- Positioner --------------------
export interface PopoverPositionerProps extends Assign<
  HTMLStyledProps<'div'>,
  ArkPopover.PositionerBaseProps
> {}

export const PopoverPositioner = withSlotContext<
  HTMLDivElement,
  PopoverPositionerProps
>(ArkPopover.Positioner, 'positioner')

// -------------------- ArrowTip --------------------
export interface PopoverArrowTipProps extends Assign<
  HTMLStyledProps<'div'>,
  ArkPopover.ArrowTipBaseProps
> {}

export const PopoverArrowTip = withSlotContext<
  HTMLDivElement,
  PopoverArrowTipProps
>(ArkPopover.ArrowTip, 'arrowTip')

// -------------------- Arrow --------------------
export interface PopoverArrowProps extends Assign<
  HTMLStyledProps<'div'>,
  ArkPopover.ArrowBaseProps
> {}

export const PopoverArrow = withSlotContext<HTMLDivElement, PopoverArrowProps>(
  ArkPopover.Arrow,
  'arrow'
)

// -------------------- Description --------------------
export interface PopoverDescriptionProps extends Assign<
  HTMLStyledProps<'div'>,
  ArkPopover.DescriptionBaseProps
> {}

export const PopoverDescription = withSlotContext<
  HTMLDivElement,
  PopoverDescriptionProps
>(ArkPopover.Description, 'description')

// -------------------- Title --------------------
export interface PopoverTitleProps extends Assign<
  HTMLStyledProps<'div'>,
  ArkPopover.TitleBaseProps
> {}

export const PopoverTitle = withSlotContext<HTMLDivElement, PopoverTitleProps>(
  ArkPopover.Title,
  'title'
)

// -------------------- Indicator --------------------
export interface PopoverIndicatorProps extends Assign<
  HTMLStyledProps<'div'>,
  ArkPopover.IndicatorBaseProps
> {}

export const PopoverIndicator = withSlotContext<
  HTMLDivElement,
  PopoverIndicatorProps
>(ArkPopover.Indicator, 'indicator')

// -------------------- Anchor --------------------
export interface PopoverAnchorProps extends Assign<
  HTMLStyledProps<'div'>,
  ArkPopover.AnchorBaseProps
> {}

export const PopoverAnchor = withSlotContext<
  HTMLDivElement,
  PopoverAnchorProps
>(ArkPopover.Anchor, 'anchor')

// -------------------- Context --------------------
export const PopoverContext = ArkPopover.Context

export interface PopoverOpenChangeDetails
  extends ArkPopover.OpenChangeDetails {}
