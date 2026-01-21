'use client'

import { Tabs as ArkTabs } from '@ark-ui/react/tabs'
import { type Assign } from '@ark-ui/react'
import type { HTMLStyledProps, UnstyledProps } from 'styled-system/types'
import { tabs, type TabsVariantProps } from 'styled-system/recipes'

import { makeStyleContext } from '../../system/make-style-context'

const { withSlotProvider, withSlotContext } = makeStyleContext(tabs)

// -------------------- Root --------------------
export interface TabsRootProviderProps
  extends
    Assign<
      Assign<HTMLStyledProps<'div'>, ArkTabs.RootProviderBaseProps>,
      TabsVariantProps
    >,
    UnstyledProps {}

export const TabsRootProvider = withSlotProvider<
  HTMLDivElement,
  TabsRootProviderProps
>(ArkTabs.RootProvider, 'root')

export interface TabsRootProps
  extends
    Assign<
      Assign<HTMLStyledProps<'div'>, ArkTabs.RootBaseProps>,
      TabsVariantProps
    >,
    UnstyledProps {}

export const TabsRoot = withSlotProvider<HTMLDivElement, TabsRootProps>(
  ArkTabs.Root,
  'root'
)

// -------------------- content --------------------
export interface TabContentProps
  extends
    Assign<HTMLStyledProps<'div'>, ArkTabs.ContentBaseProps>,
    UnstyledProps {}

export const TabContent = withSlotContext<HTMLDivElement, TabContentProps>(
  ArkTabs.Content,
  'content'
)

// -------------------- indicator --------------------
export interface TabIndicatorProps
  extends
    Assign<HTMLStyledProps<'div'>, ArkTabs.IndicatorBaseProps>,
    UnstyledProps {}

export const TabIndicator = withSlotContext<HTMLDivElement, TabIndicatorProps>(
  ArkTabs.Indicator,
  'indicator'
)

// -------------------- list --------------------
export interface TabListProps
  extends
    Assign<HTMLStyledProps<'div'>, ArkTabs.ListBaseProps>,
    UnstyledProps {}

export const TabList = withSlotContext<HTMLDivElement, TabListProps>(
  ArkTabs.List,
  'list'
)

// -------------------- trigger --------------------
export interface TabTriggerProps
  extends
    Assign<HTMLStyledProps<'div'>, ArkTabs.TriggerBaseProps>,
    UnstyledProps {}

export const TabTrigger = withSlotContext<HTMLButtonElement, TabTriggerProps>(
  ArkTabs.Trigger,
  'trigger'
)

export const TabsContext = ArkTabs.Context
