import { defineTokens } from '@pandacss/dev'

export const zIndex = defineTokens.zIndex({
  hide: {
    value: -1,
  },
  base: {
    value: 0,
  },
  dropdown: {
    value: 1000,
  },
  sticky: {
    value: 1100,
  },
  top: {
    value: 1200,
  },
  overlay: {
    value: 1300,
  },
  modal: {
    value: 1400,
  },
  popover: {
    value: 1500,
  },
  toast: {
    value: 1600,
  },
  tooltip: {
    value: 1700,
  },
})
