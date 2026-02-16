import { Card, Flex, Skeleton, Stack } from '@fidely-ui/react'

export const SkeletonCard = () => {
  return (
    <Card.Root>
      <Card.Body>
        <Stack gap="4">
          <Stack p="1.5">
            <Skeleton height="24px" width="140px" rounded="md" />
          </Stack>

          <Stack px="1.5">
            <Skeleton height="20px" width="70%" mb="2" />
            <Skeleton height="14px" width="100%" mb="1" />
            <Skeleton height="14px" width="90%" />
          </Stack>

          <Flex gap="1.5" p="1.5">
            <Skeleton height="22px" width="72px" rounded="full" />
            <Skeleton height="22px" width="72px" rounded="full" />
          </Flex>
        </Stack>
      </Card.Body>
    </Card.Root>
  )
}
