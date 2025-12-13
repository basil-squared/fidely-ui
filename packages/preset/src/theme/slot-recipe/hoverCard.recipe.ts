import { defineSlotRecipe } from '@pandacss/dev'
import { hoverCardAnatomy } from '@ark-ui/react/anatomy'

export const hoverCardSlotRecipe = defineSlotRecipe({
  className: 'fidely-hover-card',
  jsx: ['HoverCard', /HoverCard$/],
  description: 'Styles for the Fidely UI HoverCard component',
  slots: hoverCardAnatomy.keys(),

  base: {
    content: {
      '--hovercard-bg': 'colors.bg.surface',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      p: '3',
      bg: 'var(--hovercard-bg)',
      textStyle: 'sm',
      boxShadow: 'lg',
      borderRadius: 's2',
      maxWidth: '80',
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
      '--arrow-background': 'var(--hovercard-bg)',
    },
    arrowTip: {
      borderTopWidth: '0.5px',
      borderLeftWidth: '0.5px',
    },
  },
})
