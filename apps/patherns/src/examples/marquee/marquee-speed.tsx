import { Box, Marquee } from '@fidely-ui/react'

export const MarqueeSpeed = () => {
  return (
    <Marquee.Root speed={150}>
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
    </Marquee.Root>
  )
}

const items = [
  'Apple',
  'Banana',
  'Cherry',
  'Date',
  'Elderberry',
  'Fig',
  'Grape',
]
