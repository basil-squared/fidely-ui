import { defineRecipe } from '@pandacss/dev'

export const badgeRecipes = defineRecipe({
  className: 'fidely-badge',
  base: {
    userSelect: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    borderWidth: '1px',
    borderRadius: 's2',
    textAlign: 'center',
    whiteSpace: 'nowrap',
  },
  variants: {
    variant: {
      outline: {
        borderColor: 'colorPalette.alpha7',
        color: 'colorPalette.text',
      },
      subtle: {
        background: 'colorPalette.alpha3',
        borderColor: 'border.subtle',
        color: 'colorPalette.text',
      },
      solid: {
        background: 'colorPalette.default',
        color: 'colorPalette.fg',
      },
    },
    size: {
      sm: {
        textStyle: 'xs',
        px: '1.5',
        minH: '5',
      },
      md: {
        textStyle: 'sm',
        px: '2',
        minH: '6',
      },
      lg: {
        textStyle: 'sm',
        px: '2.5',
        minH: '7',
      },
      xl: {
        textStyle: 'md',
        px: '3',
        minH: '8',
      },
    },
  },
  defaultVariants: {
    variant: 'solid',
    size: 'md',
  },
})
