import { defineSlotRecipe } from '@pandacss/dev'

import { profileAnatomy } from '../../anatomy/index'

export const profileSlotRecipe = defineSlotRecipe({
  className: 'fidely-profile',
  slots: profileAnatomy.keys,
  description: 'Styles for the Fidely UI Profile/Persona component',
  jsx: ['Profile', 'Persona'],
  base: {
    root: {
      display: 'flex',
      alignItems: 'center',
      gap: '2',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.2',
    },
    name: {
      color: 'fg.default',
      textStyle: 'md',
      fontWeight: 'semibold',
    },
    title: {
      color: 'fg.muted',
      textStyle: 'sm',
      fontWeight: 'normal',
    },
    avatarWrapper: {
      position: 'relative',
      display: 'inline-flex',
    },
  },
  variants: {
    orientation: {
      horizontal: {
        root: {
          flexDirection: 'row',
          alignItems: 'center',
        },
      },
      vertical: {
        root: {
          flexDirection: 'column',
          alignItems: 'flex-start',
        },
      },
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
})
