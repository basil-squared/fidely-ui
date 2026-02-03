import Link from 'next/link'
import { Box } from '@fidely-ui/react/box'
import { Center } from '@fidely-ui/react/center'
import { Flex } from '@fidely-ui/react/flex'
import { Stack } from '@fidely-ui/react/stack'
import { Span } from '@fidely-ui/react/span'
import { Heading } from '@fidely-ui/react/heading'
import { Text } from '@fidely-ui/react/text'
import { Grid, GridItem } from '@fidely-ui/react/grid'

import { AppLogo } from '~/components/logo'
import { InfoBadge } from '~/components/nav-item'

const documentation = [
  { href: '/docs/getting-started/installation', label: 'Getting Started' },
  { href: '/docs/components/accordion', label: 'Components' },
  { href: '/docs/theming/customization', label: 'Theming' },
  // { href: '/blogs', label: 'Blog' },
]

const community = [
  // { href: '#', label: 'Discord' },
  { href: 'https://x.com/FidelyUi', label: 'Twitter' },
  { href: 'https://www.github.com/chimobi-justice', label: 'Follow on Github' },
  {
    href: 'https://github.com/fidely-ui/fidely-ui/discussions',
    label: 'Github Discussions',
  },
]

const resources = [
  { href: '#', label: 'Fidely UI pro' },
  { href: '#', label: 'Blocks' },
  { href: '#', label: 'Templates' },
]

export const Footer = () => {
  return (
    <Box as="footer" px="4" py="4">
      <Flex
        w="90%"
        mx="auto"
        alignItems="center"
        justifyContent="space-between"
        flexDirection={{ base: 'column-reverse', lg: 'row' }}
      >
        <Stack
          gap={4}
          width={{ base: '100%', lg: '50%' }}
          mt={{ base: '35px', md: '0px' }}
          color={'fg.subtle'}
        >
          <AppLogo />

          <Text>Build modern apps with speed and flexibility</Text>

          <Text>
            Maintained by{' '}
            <Span
              color={'orange.9'}
              transition="color 0.2s ease"
              fontWeight="bolder"
              _hover={{
                color: 'orange.10',
              }}
            >
              <Link
                href="https://github.com/chimobi-justice"
                target="_blank"
                rel="noopener noreferrer"
              >
                Justice Chimobi
              </Link>
            </Span>{' '}
            and contributors
          </Text>
        </Stack>
        <Grid
          width={{ base: '100%', lg: '50%' }}
          gridTemplateColumns={{
            base: '1fr',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          }}
          gap={{ base: '10', md: '16' }}
        >
          {/* Resources */}
          <GridItem>
            <Heading as={'h5'} textStyle={'lg'} mb={4} color={'fg.default'}>
              Documentation
            </Heading>
            <Stack gap={3}>
              {documentation.map(({ href, label }) => (
                <Text
                  transition="color 0.2s ease"
                  color={'fg.subtle'}
                  _hover={{
                    color: 'fg.muted',
                  }}
                  asChild
                  key={label}
                >
                  <Link href={href}>{label}</Link>
                </Text>
              ))}
            </Stack>
          </GridItem>

          {/* Community */}
          <GridItem>
            <Heading as={'h5'} textStyle={'lg'} mb={4} color={'fg.default'}>
              Community
            </Heading>
            <Stack gap={3}>
              {community.map(({ href, label }) => (
                <Text
                  transition="color 0.2s ease"
                  color={'fg.subtle'}
                  _hover={{
                    color: 'fg.muted',
                  }}
                  key={label}
                  asChild
                >
                  <Link href={href} target="_blank" rel="noopener noreferrer">
                    {label}
                  </Link>
                </Text>
              ))}
            </Stack>
          </GridItem>

          {/* Projects */}
          <GridItem>
            <Heading as={'h5'} textStyle={'lg'} mb={4} color={'fg.default'}>
              Resources
            </Heading>
            <Stack gap={3}>
              {resources.map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Text
                    transition="color 0.2s ease"
                    display="flex"
                    alignItems="center"
                    gap="2"
                    color={'fg.subtle'}
                    _hover={{
                      color: 'fg.muted',
                    }}
                  >
                    {label} <InfoBadge info="soon" />
                  </Text>
                </Link>
              ))}
            </Stack>
          </GridItem>
        </Grid>
      </Flex>

      <Center
        borderTopWidth="1px"
        borderTopStyle="solid"
        borderColor="border.muted"
        mt="5"
        py="4"
      >
        <Text>© {new Date().getFullYear()} Fidely UI. All rights reserved</Text>
      </Center>
    </Box>
  )
}
