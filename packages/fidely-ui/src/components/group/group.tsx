'use client'

import * as React from 'react'
import { ark } from '@ark-ui/react/factory'
import { styled } from 'styled-system/jsx'
import { group } from 'styled-system/recipes'
import { type ComponentProps } from 'styled-system/types'
import { cx } from 'styled-system/css'

const StyledGroup = styled(ark.div, group)

type GroupBaseProps = ComponentProps<typeof StyledGroup>

export interface GroupProps extends GroupBaseProps {}

export const Group = React.forwardRef<HTMLDivElement, GroupProps>(
  function Group(props, ref) {
    const {
      alignItems = 'center',
      justifyContent = 'flex-start',
      flexWrap,
      children,
      className,
      ...rest
    } = props

    return (
      <StyledGroup
        ref={ref}
        alignItems={alignItems}
        justifyContent={justifyContent}
        flexWrap={flexWrap}
        {...rest}
        className={cx(className)}
      >
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) return child

          return React.cloneElement(child, {
            'data-group-item': '',
          } as any)
        })}
      </StyledGroup>
    )
  }
)

Group.displayName = 'Group'
