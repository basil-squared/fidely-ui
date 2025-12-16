import { Badge, Stack } from '@fidely-ui/react'
import { HiAtSymbol, HiStar } from 'react-icons/hi'

export const BadgeIcon = () => {
  return (
    <Stack direction="row">
      <Badge colorPalette="blue">
        <HiStar />
        New
      </Badge>
      <Badge colorPalette="green">
        <HiAtSymbol />
        New
      </Badge>
    </Stack>
  )
}
