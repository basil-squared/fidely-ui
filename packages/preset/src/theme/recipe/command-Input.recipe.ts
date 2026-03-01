import { defineRecipe } from '@pandacss/dev'

export const commandInputRecipe = defineRecipe({
  className: 'fidely-command-input',
  base: {
    appearance: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    w: '100%',
    height: 'var(--command-input-height)',
    minW: 'var(--command-input-height)',
    '--default-color': 'colors.colorPalette.default',
    borderWidth: '1px',
    borderColor: 'border.default',
    bg: 'transparent',
    outline: '0',
    rounded: 'md',
    cursor: 'pointer',
    transition: 'background 0.2s ease',
    _hover: {
      bg: 'bg.subtle',
    },
    _focus: {
      outline: 'none',
    },
    _focusVisible: {
      outline: '2px solid',
      outlineColor: 'colorPalette.default',
      outlineOffset: '2px',
      boxShadow: '0 0 0 1px var(--default-color)',
    },
  },

  variants: {
    size: {
      sm: {
        '--command-input-height': 'sizes.9',
        textStyle: 'sm',
        px: '2.5',
        _icon: { width: '4', height: '4' },
      },
      md: {
        '--command-input-height': 'sizes.10',
        textStyle: 'sm',
        px: '2.5',
        _icon: { width: '4.5', height: '4.5' },
      },
      lg: {
        '--command-input-height': 'sizes.11',
        textStyle: 'md',
        px: '3',
        _icon: { width: '5', height: '5' },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
