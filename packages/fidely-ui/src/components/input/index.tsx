'use client'

import { Field as ArkField } from '@ark-ui/react/field'
import { styled } from 'styled-system/jsx'
import { ComponentProps } from 'styled-system/types'
import { input } from 'styled-system/recipes'

export const Input = styled(ArkField.Input, input)

export type InputProps = ComponentProps<typeof Input>
