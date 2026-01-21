import Image from 'next/image'
import { Box } from '@fidely-ui/react/box'
import { Card } from '@fidely-ui/react/card'
import { Center } from '@fidely-ui/react/center'
import { Flex } from '@fidely-ui/react/flex'
import { Heading } from '@fidely-ui/react/heading'
import { HStack, Stack } from '@fidely-ui/react/stack'
import { IconButton } from '@fidely-ui/react/icon-button'
import { Text } from '@fidely-ui/react/text'
import { FaRepeat, FaShuffle } from 'react-icons/fa6'
import {
  TbPlayerTrackNextFilled,
  TbPlayerTrackPrevFilled,
} from 'react-icons/tb'

export const HeroCardPlaylist = () => {
  return (
    <Card.Root
      width="100%"
      maxWidth="320px"
      height="min-content"
      animationStyle="float"
    >
      <Card.Body>
        <Flex gap="1" align="center">
          <Box width="30%">
            <Image
              src="https://picsum.photos/300/300"
              width={100}
              height={100}
              alt="Hero Card Playlist"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPsn9pfDwAFogI0qPkC4wAAAABJRU5ErkJggg=="
            />
          </Box>

          <Stack textAlign="center" width="70%">
            <Heading>Now Playing</Heading>
            <Text size="sm">Hello from album</Text>

            <Center>
              <HStack textAlign="center" gap="1.5">
                <Flex gap="1.5">
                  <IconButton size="2xs" variant="subtle" aria-label="Shuffle">
                    <FaShuffle />
                  </IconButton>

                  <IconButton size="2xs" variant="subtle" aria-label="Previous">
                    <TbPlayerTrackPrevFilled />
                  </IconButton>
                </Flex>

                <IconButton
                  size="md"
                  variant="subtle"
                  colorPalette="orange"
                  aria-label="Play"
                >
                  <FaShuffle />
                </IconButton>

                <Flex gap="1.5">
                  <IconButton size="2xs" variant="subtle" aria-label="Next">
                    <TbPlayerTrackNextFilled />
                  </IconButton>

                  <IconButton size="2xs" variant="subtle" aria-label="Repeat">
                    <FaRepeat />
                  </IconButton>
                </Flex>
              </HStack>
            </Center>
          </Stack>
        </Flex>
      </Card.Body>
    </Card.Root>
  )
}
