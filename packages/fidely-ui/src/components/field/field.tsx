'use client'

import * as React from 'react'
import type { Assign, HTMLArkProps } from '@ark-ui/react'
import { ark } from '@ark-ui/react/factory'
import { Field as ArkField, useFieldContext } from '@ark-ui/react/field'
import { field, type FieldVariantProps } from 'styled-system/recipes'
import type { HTMLStyledProps, UnstyledProps } from 'styled-system/types'
import { cx } from 'styled-system/css'

import { makeStyleContext } from '../../system/make-style-context'

const { withSlotProvider, withSlotContext } = makeStyleContext(field)

// -------------------- RootProvider --------------------
export interface FieldRootProviderProps
  extends
    Assign<
      Assign<HTMLStyledProps<'div'>, ArkField.RootProviderBaseProps>,
      FieldVariantProps
    >,
    UnstyledProps {}

export const FieldRootProvider = withSlotProvider<
  HTMLDivElement,
  FieldRootProviderProps
>(ArkField.RootProvider, 'root')

// -------------------- Root --------------------
export interface FieldRootProps
  extends
    Assign<
      Assign<HTMLStyledProps<'div'>, ArkField.RootBaseProps>,
      FieldVariantProps
    >,
    UnstyledProps {}

export const FieldRoot = withSlotProvider<HTMLDivElement, FieldRootProps>(
  ArkField.Root,
  'root'
)

// -------------------- Error --------------------
export interface FieldErrorProps
  extends
    Assign<HTMLStyledProps<'span'>, ArkField.ErrorTextBaseProps>,
    UnstyledProps {}

export const FieldError = withSlotContext<HTMLSpanElement, FieldErrorProps>(
  ArkField.ErrorText,
  'errorText'
)

// -------------------- HelperText --------------------
export interface FieldHelperTextProps
  extends
    Assign<HTMLStyledProps<'span'>, ArkField.HelperTextBaseProps>,
    UnstyledProps {}

export const FieldHelperText = withSlotContext<
  HTMLSpanElement,
  FieldHelperTextProps
>(ArkField.HelperText, 'helperText')

// -------------------- Label --------------------
export interface FieldLabelProps
  extends
    Assign<HTMLStyledProps<'label'>, ArkField.LabelBaseProps>,
    UnstyledProps {}

export const FieldLabel = withSlotContext<HTMLLabelElement, FieldLabelProps>(
  ArkField.Label,
  'label'
)

// -------------------- Indicator --------------------
export interface FieldRequiredIndicatorProps
  extends HTMLArkProps<'span'>, UnstyledProps {
  fallback?: React.ReactNode | undefined
}

export const FieldRequiredIndicator = React.forwardRef<
  HTMLSpanElement,
  FieldRequiredIndicatorProps
>(function FieldIndicator(props, ref) {
  const { fallback, className, children = '*', ...rest } = props

  const slotStyles = field().requiredIndicator

  const context = useFieldContext()
  if (!context.required) {
    return fallback
  }

  return (
    <ark.span
      ref={ref}
      aria-hidden="true"
      {...rest}
      className={cx('fidely-field__indicator', slotStyles, className)}
    >
      {children}
    </ark.span>
  )
})

export const FieldContext = ArkField.Context
