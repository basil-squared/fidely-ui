'use client'

import { forwardRef } from 'react'

import { Group, type GroupProps } from '../group/index'

export interface AvatarGroupProps extends GroupProps {}

export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  function AvatarGroup(props, ref) {
    return <Group overlap attached ref={ref} data-avatar-group="" {...props} />
  }
)
