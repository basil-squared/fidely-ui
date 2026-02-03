import { defineRecipe } from '@pandacss/dev'

export const iconRecipes = defineRecipe({
  className: 'fidely-icon',
  base: {
    display: 'inline-flex',
    color: 'currentcolor',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: '1em',
    flexShrink: '0',
  },
  variants: {
    size: {
      inherit: {},
      xs: { boxSize: '3' },
      sm: { boxSize: '4' },
      md: { boxSize: '5' },
      lg: { boxSize: '6' },
      xl: { boxSize: '7' },
    },
  },
  defaultVariants: {
    size: 'inherit',
  },
})
