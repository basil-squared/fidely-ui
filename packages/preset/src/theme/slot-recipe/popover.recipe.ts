import { defineSlotRecipe } from '@pandacss/dev'

import { popoverAnatomy } from '../../anatomy/index'

export const popoverSlotRecipe = defineSlotRecipe({
  className: 'fidely-popover',
  jsx: ['Popover', /Popover$/],
  description: 'Styles for the Fidely UI Popover component',
  slots: popoverAnatomy.keys,

  base: {
    content: {
      '--popover-bg': 'colors.bg.surface',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      p: '3',
      bg: 'var(--popover-bg)',
      textStyle: 'sm',
      boxShadow: 'lg',
      borderRadius: 's2',
      maxWidth: '80',
      maxHeight: 'var(--available-height)',
      zIndex: 'popover',
      outline: '0',

      _open: {
        animationStyle: 'fade-in',
        animationDuration: 'fast',
      },

      _closed: {
        animationStyle: 'fade-out',
        animationDuration: 'fastest',
      },
    },

    arrow: {
      '--arrow-size': 'sizes.3',
      '--arrow-background': 'var(--popover-bg)',
    },
    arrowTip: {
      borderTopWidth: '0.5px',
      borderLeftWidth: '0.5px',
    },
  },
})
