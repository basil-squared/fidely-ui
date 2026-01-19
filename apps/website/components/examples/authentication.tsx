import { Button } from '@fidely-ui/react/button'
import { Box } from '@fidely-ui/react/box'
import { Center } from '@fidely-ui/react/center'
import { Flex } from '@fidely-ui/react/flex'
import { Field } from '@fidely-ui/react/field'
import { Input } from '@fidely-ui/react/input'
import { Stack } from '@fidely-ui/react/stack'
import { Span } from '@fidely-ui/react/span'
import { Text } from '@fidely-ui/react/text'

import { AppLogo } from '~/components/logo'

export const AuthenticationExample = () => {
  return (
    <Flex minHeight="100vh" colorPalette="orange">
      <Center flex="1" px="6">
        <Stack width="100%" maxW="420px" gap="6">
          <Stack align="center" gap="4">
            <AppLogo />

            <Stack textAlign="center" gap="1">
              <Text textStyle="2xl">Create your account</Text>
              <Text textStyle="sm" color="fg.muted">
                Get started with Fidely UI in just a few steps
              </Text>
            </Stack>
          </Stack>

          <Stack gap="5">
            <Field.Root>
              <Field.Label>Full name</Field.Label>
              <Input placeholder="John Doe" />
            </Field.Root>

            <Field.Root>
              <Field.Label>Email</Field.Label>
              <Input type="email" placeholder="you@example.com" />
            </Field.Root>

            <Field.Root>
              <Field.Label>Password</Field.Label>
              <Input type="password" placeholder="Create a password" />
            </Field.Root>

            <Button fullWidth type="submit">
              Create Account
            </Button>

            <Center>
              <Text size="xs">
                Already have an account?{' '}
                <Span color="colorPalette.default">
                  <a href="#">Sign in</a>
                </Span>
              </Text>
            </Center>
          </Stack>
        </Stack>
      </Center>

      <Box
        flex="1"
        display={{ base: 'none', md: 'block' }}
        bg="colorPalette.default"
      />
    </Flex>
  )
}
