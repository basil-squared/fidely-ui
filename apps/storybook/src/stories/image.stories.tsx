import type { Meta } from '@storybook/react-vite'
import { Box } from '@fidely-ui/react'

export default {
  title: 'Data Display/Image',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export { ImageBasic as Basics } from 'patherns/examples/image/image-basic'
export { ImageCircular as Circular } from 'patherns/examples/image/image-circular'
export { ImageAspectRatio as AspectRatio } from 'patherns/examples/image/image-aspect-ratio'
export { ImageHeight as Height } from 'patherns/examples/image/image-height'
export { ImageWithHeight as WithHeight } from 'patherns/examples/image/image-with-height'
