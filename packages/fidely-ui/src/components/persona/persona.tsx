'use client'

import { forwardRef } from 'react'
import { cx } from 'styled-system/css'

import { Avatar } from '../avatar/index'
import { Profile, type ProfileRootProps } from '../profile/index'

export type PersonaSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export interface PersonaProps extends ProfileRootProps {
  name?: string
  title?: string
  img?: string
  size?: PersonaSize
}

const personaSizeMap = {
  xs: { nameSize: 'xs', titleSize: 'xs', nameWeight: 'medium' },
  sm: { nameSize: 'xs', titleSize: 'xs', nameWeight: 'medium' },
  md: { nameSize: 'sm', titleSize: 'sm', nameWeight: 'semibold' },
  lg: { nameSize: 'md', titleSize: 'md', nameWeight: 'semibold' },
  xl: { nameSize: 'md', titleSize: 'sm', nameWeight: 'semibold' },
  '2xl': { nameSize: 'lg', titleSize: 'md', nameWeight: 'bold' },
} as const

export const Persona = forwardRef<HTMLDivElement, PersonaProps>(
  function Persona(props, ref) {
    const { name, title, img, size = 'md', className, ...rest } = props
    const scale = personaSizeMap[size]

    return (
      <Profile.Root
        ref={ref}
        className={cx('fidely-persona', className)}
        {...rest}
      >
        <Profile.AvatarWrapper>
          <Avatar.Root size={size}>
            <Avatar.Fallback name={name} />
            <Avatar.Image src={img} alt={name || 'User avatar'} />
          </Avatar.Root>
        </Profile.AvatarWrapper>

        <Profile.Details>
          {name && (
            <Profile.Name
              fontSize={scale.nameSize}
              fontWeight={scale.nameWeight}
              color="fg.default"
            >
              {name}
            </Profile.Name>
          )}

          {title && (
            <Profile.Title fontSize={scale.titleSize} color="fg.muted">
              {title}
            </Profile.Title>
          )}
        </Profile.Details>
      </Profile.Root>
    )
  }
)

Persona.displayName = 'Persona'
