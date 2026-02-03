import Link from 'next/link'
import { Button } from '@fidely-ui/react/button'
import { Heading } from '@fidely-ui/react/heading'
import { HStack, Stack } from '@fidely-ui/react/stack'
import { Span } from '@fidely-ui/react/span'
import { Text } from '@fidely-ui/react/text'
import { LuArrowUpRight } from 'react-icons/lu'
import { SiArkecosystem, SiStorybook } from 'react-icons/si'
import { FaGithub } from 'react-icons/fa6'

import type { Docs } from '~/.velite'

interface PageHeaderProps {
  data: Docs
}

export const DocPageHeader = (props: PageHeaderProps) => {
  const { data } = props
  const { title, description, links } = data

  return (
    <Stack mb={4}>
      <Heading as="h1" fontSize="2xl" fontWeight="bold" mb={1}>
        {title}
      </Heading>

      <Text color="gray.500" mb={4}>
        {description}
      </Text>

      {links && (
        <HStack gap="6" flexWrap="wrap">
          {Object.entries(links).map(([title, url]) => (
            <Button
              fontWeight="medium"
              variant={'subtle'}
              size={'xs'}
              fontSize="sm"
              color="fg.muted"
              key={title + url}
              asChild
            >
              <Link target="_blank" href={url as string}>
                <Icons type={title} />
                {capitalize(title)}
                <Span color="fg.subtle">
                  <LuArrowUpRight />
                </Span>
              </Link>
            </Button>
          ))}
        </HStack>
      )}
    </Stack>
  )
}

const Icons = ({ type }: { type: string }) => {
  switch (type) {
    case 'source':
      return <FaGithub style={{ marginRight: 4 }} />
    case 'ark':
      return <SiArkecosystem style={{ marginRight: 4 }} />
    case 'recipe':
      return <FaGithub style={{ marginRight: 4 }} />
    case 'storybook':
      return <SiStorybook style={{ marginRight: 4 }} />
    default:
      return <FaGithub style={{ marginRight: 4 }} />
  }
}

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)
