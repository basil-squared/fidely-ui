'use client'

import type { Assign } from '@ark-ui/react'
import { Accordion as ArkAccordion } from '@ark-ui/react/accordion'
import { accordion, type AccordionVariantProps } from 'styled-system/recipes'
import type { HTMLStyledProps, UnstyledProps } from 'styled-system/types'

import { makeStyleContext } from '../../system/make-style-context'

const { withSlotProvider, withSlotContext } = makeStyleContext(accordion)

// -------------------- RootProvider --------------------
export interface AccordionRootProviderProps
  extends
    Assign<
      Assign<HTMLStyledProps<'div'>, ArkAccordion.RootProviderBaseProps>,
      AccordionVariantProps
    >,
    UnstyledProps {}

export const AccordionRootProvider = withSlotProvider<
  HTMLDivElement,
  AccordionRootProviderProps
>(ArkAccordion.RootProvider, 'root')

// -------------------- Root --------------------
export interface AccordionRootProps
  extends
    Assign<
      Assign<HTMLStyledProps<'div'>, ArkAccordion.RootBaseProps>,
      AccordionVariantProps
    >,
    UnstyledProps {}

export const AccordionRoot = withSlotProvider<
  HTMLDivElement,
  AccordionRootProps
>(ArkAccordion.Root, 'root')

// -------------------- Item --------------------
export interface AccordionItemProps
  extends
    Assign<HTMLStyledProps<'div'>, ArkAccordion.ItemBaseProps>,
    UnstyledProps {}

export const AccordionItem = withSlotContext<
  HTMLDivElement,
  AccordionItemProps
>(ArkAccordion.Item, 'item')

// -------------------- Content --------------------
export interface AccordionItemContentProps
  extends
    Assign<HTMLStyledProps<'div'>, ArkAccordion.ItemContentBaseProps>,
    UnstyledProps {}

export const AccordionItemContent = withSlotContext<
  HTMLDivElement,
  AccordionItemContentProps
>(ArkAccordion.ItemContent, 'itemContent')

// -------------------- Trigger --------------------
export interface AccordionItemTriggerProps
  extends
    Assign<HTMLStyledProps<'button'>, ArkAccordion.ItemTriggerBaseProps>,
    UnstyledProps {}

export const AccordionItemTrigger = withSlotContext<
  HTMLButtonElement,
  AccordionItemTriggerProps
>(ArkAccordion.ItemTrigger, 'itemTrigger')

// -------------------- Indicator --------------------
export interface AccordionItemIndicatorProps
  extends
    Assign<HTMLStyledProps<'button'>, ArkAccordion.ItemIndicatorBaseProps>,
    UnstyledProps {}

export const AccordionItemIndicator = withSlotContext<
  HTMLDivElement,
  AccordionItemIndicatorProps
>(ArkAccordion.ItemIndicator, 'itemIndicator')

// -------------------- Context --------------------
export const AccordionContext = ArkAccordion.Context
