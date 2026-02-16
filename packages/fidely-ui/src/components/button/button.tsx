'use client'

import * as React from 'react'
import { ark, type PolymorphicProps } from '@ark-ui/react/factory'
import { styled } from 'styled-system/jsx'
import { button } from 'styled-system/recipes'
import { type ComponentProps } from 'styled-system/types'

import { dataAttr } from '../../utils/attr'
import { Loader } from '../loader'

const StyledButton = styled(ark.button, button)

interface LoadingButtonProps {
  isLoading?: boolean
  loadingText?: React.ReactNode
  spinnerPlacement?: 'start' | 'end'
  spinner?: React.ReactNode
}

type ButtonBaseProps = ComponentProps<typeof StyledButton>

export interface ButtonProps
  extends ButtonBaseProps, LoadingButtonProps, PolymorphicProps {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {
    const {
      isLoading = false,
      loadingText,
      spinner,
      spinnerPlacement = 'start',
      disabled = false,
      children,
      ...rest
    } = props

    const isDisabled = disabled || isLoading

    return (
      <StyledButton
        ref={ref}
        type="button"
        aria-disabled={isDisabled}
        disabled={isDisabled}
        data-disabled={dataAttr(disabled)}
        data-loading={dataAttr(isLoading)}
        {...rest}
      >
        {!props.asChild && isLoading ? (
          <Loader
            spinner={spinner}
            text={loadingText}
            spinnerPlacement={spinnerPlacement}
          >
            {children}
          </Loader>
        ) : (
          children
        )}
      </StyledButton>
    )
  }
)

Button.displayName = 'Button'
