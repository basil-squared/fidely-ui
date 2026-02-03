'use client'

import { forwardRef } from 'react'
import { ark } from '@ark-ui/react/factory'
import { styled } from 'styled-system/jsx'
import { icon } from 'styled-system/recipes'
import { type ComponentProps } from 'styled-system/types'

const StyledIcon = styled(ark.svg, icon, {
  defaultProps: { asChild: true },
})

export type IconBaseProps = ComponentProps<typeof StyledIcon>

export interface IconProps extends IconBaseProps {}

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  function Icon(props, ref) {
    return (
      <StyledIcon ref={ref} focusable={false} aria-hidden="true" {...props} />
    )
  }
)

Icon.displayName = 'Icon'
