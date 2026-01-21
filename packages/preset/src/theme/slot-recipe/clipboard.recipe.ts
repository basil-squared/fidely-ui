import { defineSlotRecipe } from '@pandacss/dev'

import { clipboardAnatomy } from '../../anatomy/index'

export const clipboardSlotRecipe = defineSlotRecipe({
  className: 'fidely-clipboard',
  slots: clipboardAnatomy.keys,
  description: 'Styles for the Fidely UI Clipboard component',

  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.3',
    },
    control: {
      display: 'flex',
      gap: '2',
    },
    trigger: {
      display: 'flex',
      alignItems: 'center',
      gap: '2',
    },
  },
})
