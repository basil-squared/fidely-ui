import type { Meta } from '@storybook/react-vite'
import { Box } from '@fidely-ui/react'

export default {
  title: 'Utilities/Download Trigger',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export { DownloadBasic as Basics } from 'patherns/examples/download-trigger/download-basic'
export { DownloadFileSize as FileSize } from 'patherns/examples/download-trigger/download-file-size'
export { DownloadSvg as Svg } from 'patherns/examples/download-trigger/download-svg'
