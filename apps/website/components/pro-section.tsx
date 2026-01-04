import { Box } from '@fidely-ui/react/box'
import { Flex } from '@fidely-ui/react/flex'

export const ProSection = () => {
  return (
    <Box as="nav" px="4" py="6">
      <Flex
        as="ul"
        role="list"
        mt="4.5"
        gap="3"
        mb="2.5"
        w="90%"
        m="2rem auto"
        alignItems="center"
        justify="space-between"
        flexDirection={{ base: 'column', lg: 'row' }}
      >
        pro section
      </Flex>
    </Box>
  )
}
