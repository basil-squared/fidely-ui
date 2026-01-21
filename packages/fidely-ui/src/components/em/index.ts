'use client'

import { ark } from '@ark-ui/react/factory'
import { styled } from 'styled-system/jsx'
import { type HTMLStyledProps } from 'styled-system/types'

export interface EmProps extends HTMLStyledProps<'em'> {}

export const Em = styled(ark.em, {
  base: {
    fontStyle: 'italic',
  },
})

Em.displayName = 'Em'
