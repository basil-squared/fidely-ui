'use client'

import { Box } from '@fidely-ui/react/box'
import { Center } from '@fidely-ui/react/center'
import { Text } from '@fidely-ui/react/text'
import { Badge } from '@fidely-ui/react/badge'

export const Banner = () => {
  return (
    <Box bg="orange.9" p="2" w="full">
      <Center>
        <Text fontWeight="bold" color="white">
          Unlock faster development with Fidely UI Pro components{' '}
          <Badge border="none">Coming soon</Badge>
        </Text>
      </Center>
    </Box>
  )
}
