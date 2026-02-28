import { defineSlotRecipe } from '@pandacss/dev'

import { cardAnatomy } from '../../anatomy/index'

export const cardSlotRecipe = defineSlotRecipe({
  className: 'fidely-card',
  slots: cardAnatomy.keys,
  description: 'Styles for the Fidely UI Card component',

  base: {
    root: {
      background: 'bg.default',
      borderRadius: 's3',
      boxShadow: 'xs',
      minWidth: '0',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      '--card-padding': 'spacing.5',
    },
    body: {
      display: 'flex',
      flex: '1',
      flexDirection: 'column',
      padding: 'var(--card-padding)',
    },
    header: {
      display: 'flex',
      flexDirection: 'column',
      paddingInline: 'var(--card-padding)',
      paddingTop: 'var(--card-padding)',
      gap: '2',
    },
    title: {
      color: 'fg.default',
      textStyle: 'lg',
      fontWeight: 'semibold',
    },
    description: {
      color: 'fg.muted',
      textStyle: 'sm',
    },
    footer: {
      display: 'flex',
      justifyContent: 'flex-end',
      paddingInline: 'var(--card-padding)',
      paddingBottom: 'var(--card-padding)',
      gap: '2',
    },
  },
})
