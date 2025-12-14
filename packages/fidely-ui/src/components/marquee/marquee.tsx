'use client'

import type { Assign } from '@ark-ui/react'
import { Marquee as ArkMarquee } from '@ark-ui/react/marquee'
import {
  marquee,
  type MarqueeVariantProps,
} from '@fidely-ui/styled-system/recipes'
import type { HTMLStyledProps } from '@fidely-ui/styled-system/jsx'

import { makeStyleContext } from '../../system/make-style-context'

const { withSlotProvider, withSlotContext } = makeStyleContext(marquee)

// -------------------- RootProvider --------------------
export interface MarqueeRootProviderProps
  extends Assign<
    Assign<HTMLStyledProps<'div'>, ArkMarquee.RootProviderBaseProps>,
    MarqueeVariantProps
  > {}

export const MarqueeRootProvider = withSlotProvider<
  HTMLDivElement,
  MarqueeRootProviderProps
>(ArkMarquee.RootProvider, 'root')

// -------------------- Root --------------------
export interface MarqueeRootProps
  extends Assign<
    Assign<HTMLStyledProps<'div'>, ArkMarquee.RootBaseProps>,
    MarqueeVariantProps
  > {}

export const MarqueeRoot = withSlotProvider<HTMLDivElement, MarqueeRootProps>(
  ArkMarquee.Root,
  'root'
)

// -------------------- Viewport --------------------
export interface MarqueeViewportProps
  extends Assign<HTMLStyledProps<'div'>, ArkMarquee.ViewportBaseProps> {}

export const MarqueeViewport = withSlotContext<
  HTMLDivElement,
  MarqueeViewportProps
>(ArkMarquee.Viewport, 'viewport')

// -------------------- Content --------------------
export interface MarqueeContentProps
  extends Assign<HTMLStyledProps<'div'>, ArkMarquee.ContentBaseProps> {}

export const MarqueeContent = withSlotContext<
  HTMLDivElement,
  MarqueeContentProps
>(ArkMarquee.Content, 'content')

// -------------------- Item --------------------
export interface MarqueeItemProps
  extends Assign<HTMLStyledProps<'div'>, ArkMarquee.ItemBaseProps> {}

export const MarqueeItem = withSlotContext<HTMLDivElement, MarqueeItemProps>(
  ArkMarquee.Item,
  'item'
)

// -------------------- Edge --------------------
export interface MarqueeEdgeProps
  extends Assign<HTMLStyledProps<'div'>, ArkMarquee.EdgeBaseProps> {}

export const MarqueeEdge = withSlotContext<HTMLDivElement, MarqueeEdgeProps>(
  ArkMarquee.Edge,
  'edge'
)

// -------------------- Context --------------------
export const MarqueeContext = ArkMarquee.Context
export interface MarqueePauseStatusDetails
  extends ArkMarquee.PauseStatusDetails {}
