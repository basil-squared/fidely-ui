import { Box } from '@fidely-ui/react/box'
import { Flex } from '@fidely-ui/react/flex'
import { CiCircleInfo } from 'react-icons/ci'

interface CalloutProps {
  children: React.ReactNode
}

export const Callout = ({ children }: CalloutProps) => {
  return (
    <Box borderLeftWidth="4px" bg="indigo.4" px={4} py={3} rounded="md" my={6}>
      <Flex alignItems="flex-start" gap="3">
        <CiCircleInfo size="28px" />

        <Box>{children}</Box>
      </Flex>
    </Box>
  )
}
