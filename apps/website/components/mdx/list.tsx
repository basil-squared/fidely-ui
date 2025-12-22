import { Box, BoxProps } from '@fidely-ui/react'

export const Ol = (props: BoxProps) => (
  <Box
    as="ol"
    css={{
      mt: '1em',
      mb: '1em',
      pl: '1.5em',
      listStyleType: 'decimal',
      '& li': {
        mb: '0.5em',
        pl: '0.3em',
        '&::marker': { color: 'fg.subtle' },
      },
    }}
    {...props}
  />
)

export const Ul = (props: BoxProps) => (
  <Box
    as="ul"
    css={{
      mt: '1em',
      mb: '1em',
      pl: '1.5em',
      listStyleType: 'disc',
      '& li': {
        mb: '0.5em',
        pl: '0.3em',
        '&::marker': { color: 'fg.subtle' },
      },
    }}
    {...props}
  />
)

export const Li = (props: BoxProps) => (
  <Box
    as="li"
    css={{
      mb: '0.5em',
    }}
    {...props}
  />
)
