'use client'

import type { Assign } from '@ark-ui/react'
import { Checkbox as ArkCheckbox } from '@ark-ui/react/checkbox'
import { HTMLStyledProps } from 'styled-system/jsx'
import { checkbox, CheckboxVariantProps } from 'styled-system/recipes'

import { makeStyleContext } from '../../system/make-style-context'
import { FiCheck } from '../../icons/FiCheck'
import { UnstyledProps } from 'styled-system/types'

const { withSlotProvider, withSlotContext } = makeStyleContext(checkbox)

// -------------------- Root Provider --------------------
export interface CheckboxRootProviderProps
  extends
    Assign<
      Assign<HTMLStyledProps<'div'>, ArkCheckbox.RootProviderBaseProps>,
      CheckboxVariantProps
    >,
    UnstyledProps {}

export const CheckboxRootProvider = withSlotProvider<
  HTMLDivElement,
  CheckboxRootProviderProps
>(ArkCheckbox.RootProvider, 'root')

// -------------------- Root --------------------
export interface CheckboxRootProps
  extends
    Assign<
      Assign<HTMLStyledProps<'div'>, ArkCheckbox.RootBaseProps>,
      CheckboxVariantProps
    >,
    UnstyledProps {}

export const CheckboxRoot = withSlotProvider<HTMLDivElement, CheckboxRootProps>(
  ArkCheckbox.Root,
  'root'
)

// -------------------- Group --------------------
export interface CheckboxGroupProps
  extends
    Assign<HTMLStyledProps<'div'>, ArkCheckbox.GroupBaseProps>,
    UnstyledProps {}

export const CheckboxGroup = withSlotContext<
  HTMLDivElement,
  CheckboxGroupProps
>(ArkCheckbox.Group, 'group')

// -------------------- Control --------------------
export interface CheckboxControlProps
  extends
    Assign<HTMLStyledProps<'div'>, ArkCheckbox.ControlBaseProps>,
    UnstyledProps {}

export const CheckboxControl = withSlotContext<
  HTMLDivElement,
  CheckboxControlProps
>(ArkCheckbox.Control, 'control')

// -------------------- Label --------------------
export interface CheckboxLabelProps
  extends
    Assign<HTMLStyledProps<'span'>, ArkCheckbox.LabelBaseProps>,
    UnstyledProps {}

export const CheckboxLabel = withSlotContext<
  HTMLSpanElement,
  CheckboxLabelProps
>(ArkCheckbox.Label, 'label')

// -------------------- Indicator --------------------
export interface CheckboxIndicatorProps
  extends
    Assign<HTMLStyledProps<'div'>, ArkCheckbox.IndicatorBaseProps>,
    UnstyledProps {
  idleIcon?: React.ReactNode
}

export const CheckboxIndicator = withSlotContext<
  HTMLDivElement,
  CheckboxIndicatorProps
>((props) => {
  const { idleIcon = <FiCheck />, children, ...rest } = props

  return (
    <ArkCheckbox.Indicator {...rest}>
      {children ?? idleIcon}
    </ArkCheckbox.Indicator>
  )
}, 'indicator')

// -------------------- Context + Hidden Input --------------------
export const CheckboxContext = ArkCheckbox.Context
export const CheckboxHiddenInput = ArkCheckbox.HiddenInput

export interface CheckboxCheckedChangeDetails
  extends ArkCheckbox.CheckedChangeDetails {}
