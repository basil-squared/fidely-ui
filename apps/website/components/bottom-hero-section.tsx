import { Box } from '@fidely-ui/react/box'
import { Flex } from '@fidely-ui/react/flex'
import { Heading } from '@fidely-ui/react/heading'
import { Stack } from '@fidely-ui/react/stack'
import { Text } from '@fidely-ui/react/text'
import { FaAffiliatetheme } from 'react-icons/fa6'

import { Icon } from '~/components/icon'
import { LuHeartHandshake } from 'react-icons/lu'

export const BottomHeroSection = () => {
  return (
    <Box as="section" px="4" py="6">
      <Flex
        as="ul"
        mt="4.5"
        gap="6"
        mb="2.5"
        w="90%"
        m="2rem auto"
        alignItems="center"
        justify="space-between"
        flexDirection={{ base: 'column', lg: 'row' }}
      >
        <Box as="li" width={{ base: '100%', lg: '30%' }}>
          <Stack gap="3">
            <Flex align="center" gap="2">
              <Box
                bg="bg.emphasized"
                boxSize="10"
                display="flex"
                justifyContent="center"
                alignItems="center"
                rounded="s1"
              >
                <Icon
                  colorPalette="orange"
                  color="colorPalette.default"
                  aria-hidden="true"
                >
                  <FaAffiliatetheme />
                </Icon>
              </Box>
              <Heading as="h3">Composable System</Heading>
            </Flex>
            <Text color="fg.muted" size="sm">
              Headless logic and styled components designed to compose
              seamlessly.
            </Text>
          </Stack>
        </Box>

        <Box as="li" width={{ base: '100%', lg: '30%' }}>
          <Stack gap="3">
            <Flex align="center" gap="2">
              <Box
                bg="bg.emphasized"
                boxSize="10"
                display="flex"
                justifyContent="center"
                alignItems="center"
                rounded="s1"
              >
                <Icon
                  colorPalette="orange"
                  color="colorPalette.default"
                  aria-hidden="true"
                >
                  <LuHeartHandshake />
                </Icon>
              </Box>
              <Heading as="h3">Production Ready</Heading>
            </Flex>
            <Text color="fg.muted" size="sm">
              Production ready components built for real world applications.
            </Text>
          </Stack>
        </Box>

        <Box as="li" width={{ base: '100%', lg: '30%' }}>
          <Stack gap="3">
            <Flex align="center" gap="2">
              <Box
                bg="bg.emphasized"
                boxSize="10"
                display="flex"
                justifyContent="center"
                alignItems="center"
                rounded="s1"
              >
                <Icon
                  colorPalette="orange"
                  color="colorPalette.default"
                  aria-hidden="true"
                >
                  <FaAffiliatetheme />
                </Icon>
              </Box>
              <Heading as="h3">Token First</Heading>
            </Flex>
            <Text color="fg.muted" size="sm">
              Fully themable with design tokens for colors, spacing, and more,
              powered by Panda CSS.
            </Text>
          </Stack>
        </Box>
      </Flex>
    </Box>
  )
}
