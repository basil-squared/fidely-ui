import { defineSlotRecipe } from '@pandacss/dev'
import { selectAnatomy } from '../../anatomy'

export const selectSlotRecipe = defineSlotRecipe({
  className: 'fidely-select',
  slots: selectAnatomy.keys(),
  description: 'Styles for the Fidely UI Select component',

  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.6',
      width: 'full',
      '--default-color': 'colors.colorPalette.default',
      '--error-color': 'colors.border.error',
    },
    label: {
      color: 'fg.default',
      textStyle: 'sm',
      fontWeight: 'medium',
    },
    trigger: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      textAlign: 'start',
      width: 'full',
      minH: 'var(--select-trigger-h)',
      px: 'var(--select-trigger-p-x)',
      borderRadius: 's2',
      transition: 'border-color 0.2s, box-shadow 0.2s',
      userSelect: 'none',
      _disabled: {
        opacity: 0.3,
        cursor: 'not-allowed',
      },
      _placeholderShown: {
        color: 'fg.subtle',
      },

      '&[data-invalid], &:has([data-invalid])': {
        borderColor: 'fg.error',
        boxShadow: '0 0 0 1px var(--error-color)',
      },
    },
    item: {
      userSelect: 'none',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      cursor: 'pointer',
      flex: 1,
      gap: '1.6',
      borderRadius: 's1',
      _hover: {
        bg: 'gray.alpha2',
        color: 'fg.default',
      },
      _disabled: {
        opacity: 0.3,
        pointerEvents: 'none',
      },
      _highlighted: {
        bg: 'gray.alpha2',
        color: 'fg.default',
      },
      _icon: {
        width: '3.5',
        height: '3.5',
      },
    },
    content: {
      bg: 'bg.default',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 's2',
      outline: 0,
      minH: '90',
      overflowY: 'auto',
      boxShadow: 'md',
      zIndex: 'dropdown',

      _open: {
        animationStyle: 'fade-in',
        animationDuration: 'fast',
      },

      _closed: {
        animationStyle: 'fade-out',
        animationDuration: 'fastest',
      },
    },
    control: {
      position: 'relative',
    },
    clearTrigger: {
      color: 'fg.muted',
      rounded: 's1',
      pointerEvents: 'auto',

      _hover: {
        bg: 'gray.alpha2',
      },
    },
    itemText: {
      flex: 1,
    },
    itemGroupLabel: {
      fontWeight: 'medium',
      textStyle: 'sm',
    },
    itemIndicator: {
      color: 'colorPalette.default',
    },
    valueText: {
      textStyle: 'sm',
      fontWeight: 'normal',
      lineClamp: 1,
      maxW: '80%',
    },

    indicatorGroup: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1',
      pos: 'absolute',
      textStyle: 'sm',
      insetEnd: '0',
      top: '0',
      bottom: '0',
      px: 'var(--select-trigger-p-x)',
      pointerEvents: 'none',

      '[data-disabled] &': {
        opacity: 0.4,
      },
    },

    indicator: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      pointerEvents: 'none',

      '[data-invalid] &': {
        color: 'fg.error',
      },
    },
  },

  variants: {
    variant: {
      outline: {
        trigger: {
          borderWidth: '1px',
          borderColor: 'border.default',
          _focus: {
            borderColor: 'colorPalette.default',
            boxShadow: '0 0 0 1px var(--default-color)',
          },
        },
      },
      subtle: {
        trigger: {
          borderWidth: '1px',
          borderColor: 'border.default',
          bg: 'bg.subtle',
          _focus: {
            borderColor: 'colorPalette.default',
            boxShadow: '0 0 0 1px var(--default-color)',
          },
        },
      },
    },

    size: {
      xs: {
        root: {
          '--select-trigger-h': 'sizes.8',
          '--select-trigger-p-x': 'spacing.2',
        },
        content: {
          p: 1,
          gap: 1,
          textStyle: 'xs',
        },
        trigger: {
          textStyle: 'xs',
          gap: 1,
        },
        item: {
          py: '1',
          px: '1.5',
        },
        itemGroupLabel: {
          py: '1',
          px: '1.5',
        },
      },
      sm: {
        root: {
          '--select-trigger-h': 'sizes.9',
          '--select-trigger-p-x': 'spacing.2.5',
        },
        content: {
          p: 1,
          gap: 1,
          textStyle: 'sm',
        },
        trigger: {
          textStyle: 'sm',
          gap: 1,
        },
        item: {
          py: '1',
          px: '2',
        },
        itemGroupLabel: {
          py: '1',
          px: '2',
        },
      },
      md: {
        root: {
          '--select-trigger-h': 'sizes.10',
          '--select-trigger-p-x': 'spacing.3',
        },
        content: {
          p: 1,
          gap: 1,
          textStyle: 'sm',
        },
        trigger: {
          textStyle: 'sm',
          gap: 1,
        },
        item: {
          py: '1',
          px: '2',
        },
        itemGroupLabel: {
          py: '1',
          px: '2',
        },
      },
      lg: {
        root: {
          '--select-trigger-h': 'sizes.12',
          '--select-trigger-p-x': 'spacing.4',
        },
        content: {
          p: 1,
          gap: 1,
          textStyle: 'sm',
        },
        trigger: {
          textStyle: 'md',
          gap: 2,
          py: 3,
        },
        item: {
          py: '2',
          px: '3',
        },
        itemGroupLabel: {
          py: '1',
          px: '2',
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
    variant: 'outline',
  },
})
