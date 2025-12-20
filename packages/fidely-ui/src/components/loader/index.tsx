'use client'

import * as React from 'react'

import { Spinner, SpinnerProps } from '../spinner/index'
import { Span } from '../span/index'

export interface LoaderProps extends SpinnerProps {
  visible?: boolean
  spinner?: React.ReactNode
  spinnerPlacement?: 'start' | 'end'
  text?: React.ReactNode
}

export const Loader = React.forwardRef<HTMLSpanElement, LoaderProps>(
  function Loader(props, ref) {
    const {
      spinner = (
        <Spinner
          width="1.1em"
          height="1.1em"
          borderWidth="1.5px"
          aria-hidden="true"
        />
      ),
      spinnerPlacement = 'start',
      text,
      children,
      visible = true,
      ...rest
    } = props

    if (!visible) return <>{children}</>

    if (text) {
      return (
        <Span ref={ref} display="inline-flex" alignItems="center" {...rest}>
          {spinnerPlacement === 'start' && (
            <Span style={{ marginInlineEnd: '0.6em' }}>{spinner}</Span>
          )}

          <Span>{text}</Span>

          {spinnerPlacement === 'end' && (
            <Span style={{ marginInlineStart: '0.6em' }}>{spinner}</Span>
          )}
        </Span>
      )
    }

    return (
      <Span
        ref={ref}
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        {...rest}
      >
        {spinnerPlacement === 'start' && (
          <Span style={{ marginInlineEnd: children ? '0.6em' : 0 }}>
            {spinner}
          </Span>
        )}

        <Span visibility="hidden" display="contents">
          {children}
        </Span>

        {spinnerPlacement === 'end' && (
          <Span style={{ marginInlineStart: children ? '0.6em' : 0 }}>
            {spinner}
          </Span>
        )}
      </Span>
    )
  }
)

Loader.displayName = 'Loader'
