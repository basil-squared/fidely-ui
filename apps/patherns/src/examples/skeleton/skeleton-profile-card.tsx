import { Card, Flex, Skeleton, Stack } from '@fidely-ui/react'

export const SkeletonProfileCard = () => {
  return (
    <Card.Root maxW="sm">
      <Card.Body>
        <Flex gap="4" align="center">
          {/* avatar */}
          <Skeleton boxSize="12" rounded="full" />

          {/* name + meta */}
          <Stack flex="1" gap="2">
            <Skeleton height="16px" width="120px" />
            <Skeleton height="12px" width="80px" />
          </Stack>

          {/* action */}
          <Skeleton height="28px" width="72px" rounded="md" />
        </Flex>
      </Card.Body>
    </Card.Root>
  )
}
