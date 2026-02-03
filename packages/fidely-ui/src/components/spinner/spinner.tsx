'use client'

import { forwardRef } from 'react'
import { ark } from '@ark-ui/react/factory'
import { styled } from 'styled-system/jsx'
import { spinner } from 'styled-system/recipes'
import { type ComponentProps } from 'styled-system/types'

const StyledSpinner = styled(ark.span, spinner)

export type SpinnerBaseProps = ComponentProps<typeof StyledSpinner>

export interface SpinnerProps extends SpinnerBaseProps {}

export const Spinner = forwardRef<HTMLSpanElement, SpinnerProps>(
  function Spinner(props, ref) {
    return <StyledSpinner ref={ref} {...props} />
  }
)

Spinner.displayName = 'Spinner'
