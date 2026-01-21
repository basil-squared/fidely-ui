import { defineRecipe } from '@pandacss/dev'

export const inputGroupRecipe = defineRecipe({
  className: 'fidely-input-group',
  jsx: ['InputGroup'],
  base: {
    display: 'flex',
    alignItems: 'stretch',
    position: 'relative',
    width: '100%',
    '--error-color': 'colors.border.error',

    '--input-group-height': 'sizes.10',
    '--input-addon-size': 'sm',

    '& > input, & > .fidely-input': {
      flex: 1,
      borderRadius: '0',
      borderWidth: '1px',
      borderColor: 'border.default',
      background: 'bg.surface',

      height: 'var(--input-group-height)',
      _focusWithin: {
        zIndex: 1,
      },
      _invalid: {
        borderColor: 'fg.error',
        _focus: {
          borderColor: 'fg.error',
          boxShadow: '0 0 0 1px var(--error-color)',
        },
      },
    },

    '& > :first-child': {
      borderTopLeftRadius: 's2',
      borderBottomLeftRadius: 's2',
      height: 'var(--input-group-height)',
      textStyle: 'var(--input-addon-size)',
    },
    '& > :last-child': {
      borderTopRightRadius: 's2',
      borderBottomRightRadius: 's2',
      height: 'var(--input-group-height)',
      textStyle: 'var(--input-addon-size)',
    },
  },

  variants: {
    size: {
      sm: {
        '--input-group-height': 'sizes.8',
        '--input-addon-size': 'sm',
        _icon: { width: '4', height: '4' },
      },
      md: {
        '--input-group-height': 'sizes.10',
        '--input-addon-size': 'sm',
        _icon: { width: '4.5', height: '4.5' },
      },
      lg: {
        '--input-group-height': 'sizes.12',
        '--input-addon-size': 'md',
        _icon: { width: '5', height: '5' },
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})
