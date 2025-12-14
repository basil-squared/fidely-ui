import { defineSlotRecipe } from '@pandacss/dev'
import { marqueeAnatomy } from '@ark-ui/react/anatomy'

export const marqueeSlotRecipe = defineSlotRecipe({
  className: 'fidely-marquee',
  jsx: ['Marquee', /Marquee$/],
  description: 'Styles for the Fidely UI Marquee component',
  slots: marqueeAnatomy.keys(),

  base: {
    root: {
      position: 'relative',

      '&[data-paused] [data-part="content"]': {
        animationPlayState: 'paused !important',
      },
    },
    content: {
      display: 'flex',
      _horizontal: { flexDirection: 'column' },
      _vertical: { flexDirection: 'row' },
      minW: 'max-content',

      animationTimingFunction: 'linear',
      animationFillMode: 'forwards',
      animationDuration: 'var(--marquee-duration)',
      animationDelay: 'var(--marquee-delay)',
      animationIterationCount: 'var(--marquee-loop-count)',

      '&[data-side="start"], &[data-side="end"]': {
        animationName: 'marqueeX',
      },
      '&[data-side="top"], &[data-side="bottom"]': {
        animationName: 'marqueeY',
      },
    },
    viewport: {
      display: 'flex',
      overflow: 'hidden',
    },
    item: {
      userSelect: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '2',
      px: '3',
      py: '2',
      minW: 'max-content',
    },
    edge: {
      position: 'absolute',
      zIndex: 10,
      pointerEvents: 'none',
      '--edge-size': '20%',
      '--edge-color': 'colors.bg.default',

      '&[data-side="start"]': {
        insetInlineStart: 0,
        width: 'var(--edge-size)',
        background: 'linear-gradient(to right, var(--edge-color), transparent)',
      },
      '&[data-side="end"]': {
        insetInlineEnd: 0,
        width: 'var(--edge-size)',
        background: 'linear-gradient(to left, var(--edge-color), transparent)',
      },
      '&[data-side="top"]': {
        insetBlockStart: 0,
        height: 'var(--edge-size)',
        background:
          'linear-gradient(to bottom, var(--edge-color), transparent)',
      },
      '&[data-side="bottom"]': {
        insetBlockEnd: 0,
        height: 'var(--edge-size)',
        background: 'linear-gradient(to top, var(--edge-color), transparent)',
      },
    },
  },
})
