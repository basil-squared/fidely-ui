'use client'

import * as React from 'react'
import { ark } from '@ark-ui/react/factory'
import { styled } from 'styled-system/jsx'
import { inputGroup } from 'styled-system/recipes'
import { ComponentProps } from 'styled-system/types'

import { type BoxProps } from '../box/index'
import { InputAddon, type InputAddonProps } from '../input-addon/index'

const StyledInputGroup = styled(ark.div, inputGroup)

type InputGroupBaseProps = ComponentProps<typeof StyledInputGroup>

export interface InputGroupProps
  extends Omit<BoxProps, 'direction'>, InputGroupBaseProps {
  /**
   * Element rendered at the start (left side) of the input group.
   * Commonly used for icons, labels, or prefixes.
   */
  startAddon?: React.ReactNode | undefined

  /**
   * Props forwarded to the start addon component.
   */
  startAddonProps?: InputAddonProps | undefined
  /**
   * Element rendered at the end (right side) of the input group.
   * Commonly used for actions, suffixes, or icons.
   */
  endAddon?: React.ReactNode | undefined
  /**
   * Props forwarded to the end addon component.
   */
  endAddonProps?: InputAddonProps | undefined
  /**
   * The input or elements rendered inside the input group.
   */
  children: React.ReactNode
}

export const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(
  function InputGroup(props, ref) {
    const {
      startAddon,
      startAddonProps,
      endAddon,
      endAddonProps,
      children,
      ...rest
    } = props

    return (
      <StyledInputGroup ref={ref} {...rest}>
        {startAddon && (
          <InputAddon {...startAddonProps} placement="left">
            {startAddon}
          </InputAddon>
        )}

        {children}

        {endAddon && (
          <InputAddon {...endAddonProps} placement="right">
            {endAddon}
          </InputAddon>
        )}
      </StyledInputGroup>
    )
  }
)

InputGroup.displayName = 'InputGroup'
