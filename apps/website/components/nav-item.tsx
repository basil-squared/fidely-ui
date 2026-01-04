import Link from 'next/link'
import { Badge as FidelyBadge } from '@fidely-ui/react/badge'
import { Span } from '@fidely-ui/react/span'
import { Stack } from '@fidely-ui/react/stack'

interface NavItemProps {
  href: string
  label: string
  info?: string
  closeDrawer?: () => void
  fontSize?: string
}

export const NavItem = (props: NavItemProps) => {
  const { href, label, info, fontSize = '13px', closeDrawer } = props

  return (
    <Link href={href} onClick={closeDrawer} style={{ marginLeft: '6px' }}>
      <Stack direction="row" align="center" gap="1">
        <Span color="fg.muted" fontSize={fontSize}>
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

export const InfoBadge = ({ info }: InfoBadgeProps) => {
  return (
    <FidelyBadge colorPalette="orange" size="sm">
      {info}
    </FidelyBadge>
  )
}
