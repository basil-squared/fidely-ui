import { defineRecipe } from '@pandacss/dev'

export const groupRecipe = defineRecipe({
  className: 'fidely-group',
  description: 'A flex group component for layout and avatar stacking',
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',

    '&[data-avatar-group]': {
      '& > *[data-group-item]': {
        borderWidth: '2px',
        borderColor: 'bg.default',
      },
    },
  },
  variants: {
    direction: {
      row: { flexDirection: 'row' },
      column: { flexDirection: 'column' },
    },
    attached: {
      true: {
        gap: '0!',
      },
    },
    overlap: {
      true: {
        '&[data-avatar-group] > *:not(:first-child)': {
          marginLeft: '-0.75rem',
        },
      },
    },
  },
  defaultVariants: {
    direction: 'row',
  },
})
