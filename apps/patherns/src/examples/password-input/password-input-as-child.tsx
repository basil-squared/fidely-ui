import { Input, PasswordInput } from '@fidely-ui/react'

export const PasswordInputAsChild = () => {
  return (
    <PasswordInput.Root>
      <PasswordInput.Label>Password</PasswordInput.Label>
      <PasswordInput.Control>
        <PasswordInput.Input asChild>
          <Input placeholder="enter password" unstyled />
        </PasswordInput.Input>
        <PasswordInput.VisibilityTrigger>
          <PasswordInput.Indicator />
        </PasswordInput.VisibilityTrigger>
      </PasswordInput.Control>
    </PasswordInput.Root>
  )
}
