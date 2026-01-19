'use client'

import type { Assign, PolymorphicProps } from '@ark-ui/react'
import { ark } from '@ark-ui/react/factory'
import type { HTMLStyledProps, UnstyledProps } from 'styled-system/types'
import { profile, type ProfileVariantProps } from 'styled-system/recipes'

import { makeStyleContext } from '../../system/make-style-context'

const { withSlotProvider, withSlotContext } = makeStyleContext(profile)

// -------------------- Root --------------------
export interface ProfileRootProps
  extends
    Assign<
      Assign<HTMLStyledProps<'div'>, PolymorphicProps>,
      ProfileVariantProps
    >,
    UnstyledProps {}

export const ProfileRoot = withSlotProvider<HTMLDivElement, ProfileRootProps>(
  ark.div,
  'root'
)

// -------------------- Details --------------------
export interface ProfileDetailsProps
  extends Assign<HTMLStyledProps<'div'>, PolymorphicProps>, UnstyledProps {}

export const ProfileDetails = withSlotContext<
  HTMLDivElement,
  ProfileDetailsProps
>(ark.div, 'details')

// -------------------- Name --------------------
export interface ProfileNameProps
  extends Assign<HTMLStyledProps<'h2'>, PolymorphicProps>, UnstyledProps {}

export const ProfileName = withSlotContext<
  HTMLHeadingElement,
  ProfileNameProps
>(ark.h2, 'name')

// -------------------- Title --------------------
export interface ProfileTitleProps
  extends Assign<HTMLStyledProps<'h3'>, PolymorphicProps>, UnstyledProps {}

export const ProfileTitle = withSlotContext<
  HTMLHeadingElement,
  ProfileTitleProps
>(ark.h3, 'title')

// -------------------- AvatarWrapper --------------------
export interface ProfileAvatarWrapperProps
  extends Assign<HTMLStyledProps<'div'>, PolymorphicProps>, UnstyledProps {}

export const ProfileAvatarWrapper = withSlotContext<
  HTMLDivElement,
  ProfileAvatarWrapperProps
>(ark.div, 'avatarWrapper')
