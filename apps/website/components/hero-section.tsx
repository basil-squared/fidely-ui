import Link from 'next/link'
import { Box } from '@fidely-ui/react/box'
import { Button } from '@fidely-ui/react/button'
import { Flex } from '@fidely-ui/react/flex'
import { Stack } from '@fidely-ui/react/stack'
import { Heading } from '@fidely-ui/react/heading'
import { Text } from '@fidely-ui/react/text'
import { Center } from '@fidely-ui/react/center'

import {
  HeroCard,
  HeroSwitch,
  HeroSpinner,
  HeroMenu,
  HeroTabs,
  HeroHighlightCard,
  HeroCardPlaylist,
} from '~/components/hero'

export const HeroSection = () => {
  return (
    <Box
      as="section"
      aria-labelledby="hero-heading"
      position="relative"
      overflow="auto"
    >
      <Flex
        justify="space-between"
        height={{ base: '100vdh', lg: '90vh' }}
        px="4"
        py="4"
        gap="2"
        width="90%"
        mx="auto"
      >
        {/* left section */}
        <Box width={{ base: '100%', lg: '50%' }}>
          <Flex
            flexDirection="column"
            justify="center"
            height={{ base: '100vdh', lg: '85vh' }}
          >
            <Stack gap="7">
              <Stack gap="4">
                <Heading
                  as="h1"
                  id="hero-heading"
                  size={{ base: '3xl', lg: '5xl' }}
                  colorPalette="orange"
                  color="colorPalette.default"
                  lineHeight="1.4em"
                >
                  Build modern apps with speed and flexibility
                </Heading>

                <Heading
                  as="h2"
                  size={{ base: '2xl', lg: '4xl' }}
                  color="fg.muted"
                >
                  UI library for modern React apps
                </Heading>
              </Stack>

              <Text color="fg.disabled" size={{ base: 'md', lg: 'lg' }}>
                Fidely UI is a modern, beautifully crafted React design system
                powered by{' '}
                <Text
                  as="strong"
                  colorPalette="orange"
                  color="colorPalette.default"
                >
                  <a
                    href="https://ark-ui.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ark UI
                  </a>
                </Text>{' '}
                and{' '}
                <Text
                  as="strong"
                  colorPalette="orange"
                  color="colorPalette.default"
                >
                  <a
                    href="https://panda-css.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Panda CSS
                  </a>
                </Text>
                , delivering accessible and themeable components for building
                exceptional web apps
              </Text>

              <Stack flexDirection={{ base: 'column', md: 'row' }}>
                <Button
                  asChild
                  size={{ base: 'md', lg: 'lg' }}
                  colorPalette="orange"
                >
                  <Link
                    href="/docs/getting-started/installation"
                    aria-label="Getting Started"
                  >
                    Get Started
                  </Link>
                </Button>

                <Button
                  asChild
                  colorPalette="gray"
                  variant="subtle"
                  size={{ base: 'md', lg: 'lg' }}
                >
                  <Link
                    href="/docs/getting-started/installation"
                    aria-label="Explore Fidely UI blocks coming soon"
                  >
                    Explore Blocks
                  </Link>
                </Button>
              </Stack>
            </Stack>
          </Flex>
        </Box>

        {/* right section */}
        <Box
          width={'50%'}
          display={{ base: 'none', lg: 'block' }}
          height="100%"
          position="absolute"
          top="0"
          right="0"
        >
          <Stack gap="2">
            <Flex gap="3" justify="space-between" minH="auto">
              <HeroCard />
              <HeroSwitch />
              <HeroSpinner />
            </Flex>

            <Center py="6">
              <Flex gap="4" width="80%">
                <HeroCardPlaylist />
                <HeroMenu />
              </Flex>
            </Center>

            <Flex justify="flex-end" mb="2">
              <HeroTabs />
            </Flex>

            <Flex justify="center" mt="8">
              <HeroHighlightCard />
            </Flex>
          </Stack>
        </Box>
      </Flex>
    </Box>
  )
}
