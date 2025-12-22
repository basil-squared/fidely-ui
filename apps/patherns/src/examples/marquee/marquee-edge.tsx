import { Box, Marquee } from '@fidely-ui/react'

export const MarqueeEdge = () => {
  return (
    <>
      <Marquee.Root side="start">
        <Marquee.Edge side="start" />
        <Marquee.Viewport>
          <Marquee.Content>
            {items.map((item, i) => (
              <Marquee.Item key={i}>
                <Box
                  css={{
                    px: '6',
                    py: '4',
                    borderRadius: 'xl',
                    border: '1px solid',
                    borderColor: 'border.default',
                    boxShadow: 'md',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item}
                </Box>
              </Marquee.Item>
            ))}
          </Marquee.Content>
        </Marquee.Viewport>
        <Marquee.Edge side="end" />
      </Marquee.Root>

      <Marquee.Root side="end">
        <Marquee.Edge side="start" />
        <Marquee.Viewport>
          <Marquee.Content>
            {items.map((item, i) => (
              <Marquee.Item key={i}>
                <Box
                  css={{
                    px: '6',
                    py: '4',
                    borderRadius: 'xl',
                    border: '1px solid',
                    borderColor: 'border.default',
                    boxShadow: 'md',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item}
                </Box>
              </Marquee.Item>
            ))}
          </Marquee.Content>
        </Marquee.Viewport>
        <Marquee.Edge side="end" />
      </Marquee.Root>
    </>
  )
}

const items = [
  'Reverse direction',
  'Right-to-left motion',
  'Top-to-bottom motion',
  'Continuous scrolling',
  'Smooth animation',
]
