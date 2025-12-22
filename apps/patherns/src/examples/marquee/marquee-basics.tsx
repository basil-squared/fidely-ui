import { Box, Marquee } from '@fidely-ui/react'

export const MarqueeBasics = () => {
  return (
    <Marquee.Root pauseOnInteraction>
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
  'Accessible by default',
  'Composable components',
  'Built on Ark UI',
  'Powered by Panda CSS',
  'Design-system ready',
  'TypeScript-first',
  'Production tested',
]
