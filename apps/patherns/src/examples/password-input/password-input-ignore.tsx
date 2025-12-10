import { PasswordInput } from '@fidely-ui/react/password-input'

export const PasswordInputIgnore = () => {
  return (
    <PasswordInput.Root ignorePasswordManagers>
      <PasswordInput.Label>Password</PasswordInput.Label>
      <PasswordInput.Control>
        <PasswordInput.Input placeholder="enter password" />
        <PasswordInput.VisibilityTrigger>
          <PasswordInput.Indicator />
        </PasswordInput.VisibilityTrigger>
      </PasswordInput.Control>
    </PasswordInput.Root>
  )
}
