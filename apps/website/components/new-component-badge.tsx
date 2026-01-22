import Link from 'next/link'
import { Badge } from '@fidely-ui/react/badge'

interface NewComponentBadgeProps {
  href: string
  children: React.ReactNode
}

export const NewComponentBadge = ({
  href,
  children,
}: NewComponentBadgeProps) => {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <Badge
        size="md"
        // bg="orange.8"
        // color="orange.11"

        // _dark={{ bg: 'orange.5', color: 'orange.10' }}
        py="2"
        px="3.5"
        rounded="full"
        variant="outline"
        colorPalette="orange"
      >
        {children}
      </Badge>
    </Link>
  )
}
