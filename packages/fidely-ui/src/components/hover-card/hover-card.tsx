'use client'

import type { Assign } from '@ark-ui/react'
import { HoverCard as ArkHoverCard } from '@ark-ui/react/hover-card'
import { hoverCard, type HoverCardVariantProps } from 'styled-system/recipes'
import { type HTMLStyledProps } from 'styled-system/types'

import { makeStyleContext } from '../../system/make-style-context'

const { withSlotRootProvider, withSlotContext } = makeStyleContext(hoverCard)

// -------------------- RootProvider --------------------
export interface HoverCardRootProviderProps extends Assign<
  Assign<HTMLStyledProps<'div'>, ArkHoverCard.RootProviderBaseProps>,
  HoverCardVariantProps
> {}

export const HoverCardRootProvider =
  withSlotRootProvider<HoverCardRootProviderProps>(ArkHoverCard.RootProvider)

// -------------------- Root --------------------
export interface HoverCardRootProps extends Assign<
  Assign<HTMLStyledProps<'div'>, ArkHoverCard.RootBaseProps>,
  HoverCardVariantProps
> {}

export const HoverCardRoot = withSlotRootProvider<HoverCardRootProps>(
  ArkHoverCard.Root
)

// -------------------- Content --------------------
export interface HoverCardContentProps extends Assign<
  HTMLStyledProps<'div'>,
  ArkHoverCard.ContentBaseProps
> {}

export const HoverCardContent = withSlotContext<
  HTMLDivElement,
  HoverCardContentProps
>(ArkHoverCard.Content, 'content')

// -------------------- Trigger --------------------
export interface HoverCardTriggerProps extends Assign<
  HTMLStyledProps<'button'>,
  ArkHoverCard.TriggerBaseProps
> {}

export const HoverCardTrigger = withSlotContext<
  HTMLButtonElement,
  HoverCardTriggerProps
>(ArkHoverCard.Trigger, 'trigger')

// -------------------- Positioner --------------------
export interface HoverCardPositionerProps extends Assign<
  HTMLStyledProps<'div'>,
  ArkHoverCard.PositionerBaseProps
> {}

export const HoverCardPositioner = withSlotContext<
  HTMLDivElement,
  HoverCardPositionerProps
>(ArkHoverCard.Positioner, 'positioner')

// -------------------- ArrowTip --------------------
export interface HoverCardArrowTipProps extends Assign<
  HTMLStyledProps<'div'>,
  ArkHoverCard.ArrowTipBaseProps
> {}

export const HoverCardArrowTip = withSlotContext<
  HTMLDivElement,
  HoverCardArrowTipProps
>(ArkHoverCard.ArrowTip, 'arrowTip')

// -------------------- Arrow --------------------
export interface HoverCardArrowProps extends Assign<
  HTMLStyledProps<'div'>,
  ArkHoverCard.ArrowBaseProps
> {}

export const HoverCardArrow = withSlotContext<
  HTMLDivElement,
  HoverCardArrowProps
>(ArkHoverCard.Arrow, 'arrow')

// -------------------- Context --------------------
export const HoverCardContext = ArkHoverCard.Context

export interface HoverCardOpenChangeDetails
  extends ArkHoverCard.OpenChangeDetails {}
