import { Badge, Stack } from '@fidely-ui/react'

export const BadgeBasics = () => {
  return (
    <Stack direction="row">
      <Badge>Default</Badge>
      <Badge colorPalette="green">Success</Badge>
      <Badge colorPalette="red">Removed</Badge>
      <Badge colorPalette="purple">New</Badge>
    </Stack>
  )
}
