import Link from 'next/link'
import { Button, Heading, HStack, Span, Stack, Text } from '@fidely-ui/react'
import { LuArrowUpRight } from 'react-icons/lu'
import type { Docs } from '~/.velite'
import { SiArkecosystem, SiStorybook } from 'react-icons/si'
import { FaGithub } from 'react-icons/fa6'

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
            <Link target="_blank" key={title + url} href={url as string}>
              <Button
                fontWeight="medium"
                variant={'subtle'}
                size={'xs'}
                fontSize="sm"
                color="fg.muted"
              >
                <Icons type={title} />
                {capitalize(title)}
                <Span color="fg.subtle">
                  <LuArrowUpRight />
                </Span>
              </Button>
            </Link>
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
