'use client'

import { forwardRef } from 'react'
import { type Assign } from '@ark-ui/react'
import { ark, HTMLArkProps } from '@ark-ui/react/factory'
import { Dialog as ArkDialog, useDialogContext } from '@ark-ui/react/dialog'
import { dialog, type DialogVariantProps } from 'styled-system/recipes'
import type { UnstyledProps, HTMLStyledProps } from 'styled-system/types'
import { styled } from 'styled-system/jsx'

import { makeStyleContext } from '../../system/make-style-context'

const { withSlotRootProvider, withSlotContext } = makeStyleContext(dialog)

// -------------------- RootProvider --------------------
export interface DialogRootProviderProps
  extends
    Assign<ArkDialog.RootProviderProps, DialogVariantProps>,
    UnstyledProps {}

export const DialogRootProvider = withSlotRootProvider<DialogRootProviderProps>(
  ArkDialog.RootProvider
)

// -------------------- Root --------------------
export interface DialogRootProps
  extends Assign<ArkDialog.RootProps, DialogVariantProps>, UnstyledProps {}

export const DialogRoot = withSlotRootProvider<DialogRootProps>(ArkDialog.Root)

// -------------------- Content --------------------
export interface DialogContentProps
  extends
    Assign<HTMLStyledProps<'div'>, ArkDialog.ContentBaseProps>,
    UnstyledProps {}

export const DialogContent = withSlotContext<
  HTMLDivElement,
  DialogContentProps
>(ArkDialog.Content, 'content')

// -------------------- Description --------------------
export interface DialogDescriptionProps
  extends
    Assign<HTMLStyledProps<'div'>, ArkDialog.DescriptionBaseProps>,
    UnstyledProps {}

export const DialogDescription = withSlotContext<
  HTMLDivElement,
  DialogDescriptionProps
>(ArkDialog.Description, 'description')

// -------------------- Title --------------------
export interface DialogTitleProps
  extends
    Assign<HTMLStyledProps<'h2'>, ArkDialog.TitleBaseProps>,
    UnstyledProps {}

export const DialogTitle = withSlotContext<
  HTMLHeadingElement,
  DialogTitleProps
>(ArkDialog.Title, 'title')

// -------------------- CloseTrigger --------------------
export interface DialogCloseTriggerProps
  extends
    Assign<HTMLStyledProps<'button'>, ArkDialog.CloseTriggerBaseProps>,
    UnstyledProps {}

export const DialogCloseTrigger = withSlotContext<
  HTMLButtonElement,
  DialogCloseTriggerProps
>(ArkDialog.CloseTrigger, 'closeTrigger')

// -------------------- Trigger --------------------
export interface DialogTriggerProps
  extends
    Assign<HTMLStyledProps<'button'>, ArkDialog.TriggerBaseProps>,
    UnstyledProps {}

export const DialogTrigger = withSlotContext<
  HTMLButtonElement,
  DialogTriggerProps
>(ArkDialog.Trigger, 'trigger')

// -------------------- CloseAction --------------------
export interface DialogCloseActionProps
  extends HTMLArkProps<'button'>, UnstyledProps {}

const StyledCloseAction = styled(ark.button)

export const DialogCloseAction = forwardRef<
  HTMLButtonElement,
  DialogCloseActionProps
>(function DialogCloseAction(props, ref) {
  const dialog = useDialogContext()

  return (
    <StyledCloseAction
      {...props}
      ref={ref}
      onClick={() => dialog.setOpen(false)}
    />
  )
})

// -------------------- Positioner --------------------
export interface DialogPositionerProps
  extends
    Assign<HTMLStyledProps<'div'>, ArkDialog.PositionerBaseProps>,
    UnstyledProps {}

export const DialogPositioner = withSlotContext<
  HTMLDivElement,
  DialogPositionerProps
>(ArkDialog.Positioner, 'positioner')

// -------------------- Backdrop --------------------
export interface DialogBackdropProps
  extends
    Assign<HTMLStyledProps<'div'>, ArkDialog.BackdropBaseProps>,
    UnstyledProps {}

export const DialogBackdrop = withSlotContext<
  HTMLDivElement,
  DialogBackdropProps
>(ArkDialog.Backdrop, 'backdrop')

// -------------------- Body --------------------
export interface DialogBodyProps
  extends HTMLStyledProps<'div'>, UnstyledProps {}

export const DialogBody = withSlotContext<HTMLDivElement, DialogBodyProps>(
  'div',
  'body'
)

// -------------------- Header --------------------
export interface DialogHeaderProps
  extends HTMLStyledProps<'div'>, UnstyledProps {}

export const DialogHeader = withSlotContext<HTMLDivElement, DialogHeaderProps>(
  'div',
  'header'
)

// -------------------- Footer --------------------
export interface DialogFooterProps
  extends HTMLStyledProps<'div'>, UnstyledProps {}

export const DialogFooter = withSlotContext<HTMLDivElement, DialogFooterProps>(
  'div',
  'footer'
)

// -------------------- Context --------------------
export const DialogContext = ArkDialog.Context

export interface DialogOpenChangeDetails extends ArkDialog.OpenChangeDetails {}
