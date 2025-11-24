'use client'

import { useState } from 'react'
import { PasswordInput } from '@fidely-ui/react/password-input'

export const PasswordInputInvalid = () => {
  const [value, setValue] = useState('')
  const isInvalid = value.length < 3

  return (
    <PasswordInput.Root invalid={isInvalid}>
      <PasswordInput.Label>Password</PasswordInput.Label>
      <PasswordInput.Control>
        <PasswordInput.Input
          placeholder="enter password"
          onChange={(e) => setValue(e.target.value)}
        />
        <PasswordInput.VisibilityTrigger>
          <PasswordInput.Indicator />
        </PasswordInput.VisibilityTrigger>
      </PasswordInput.Control>
    </PasswordInput.Root>
  )
}
