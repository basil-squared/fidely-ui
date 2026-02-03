'use client'

import { ark } from '@ark-ui/react/factory'
import { styled } from 'styled-system/jsx'
import { type HTMLStyledProps } from 'styled-system/types'

export interface SpanProps extends HTMLStyledProps<'span'> {}

export const Span = styled(ark.span)

Span.displayName = 'Span'
