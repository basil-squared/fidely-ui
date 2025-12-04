import Link from 'next/link'
import { Badge as FidelyBadge } from '@fidely-ui/react/badge'
import { Span } from '@fidely-ui/react/span'
import { Stack } from '@fidely-ui/react/stack'

interface NavItemProps {
  href: string
  label: string
  info?: string
  closeDrawer?: () => void
}

export const NavItem = (props: NavItemProps) => {
  const { href, label, info, closeDrawer } = props

  return (
    <Link href={href} onClick={closeDrawer} style={{ marginLeft: '6px' }}>
      <Stack direction="row" align="center" gap="1">
        <Span color="fg.muted" fontSize="13px">
          {label}
        </Span>
        {info && <InfoBadge info={info} />}
      </Stack>
    </Link>
  )
}

interface InfoBadgeProps {
  info: string
}

const InfoBadge = ({ info }: InfoBadgeProps) => {
  return (
    <FidelyBadge colorPalette="orange" size="sm">
      {info}
    </FidelyBadge>
  )
}
