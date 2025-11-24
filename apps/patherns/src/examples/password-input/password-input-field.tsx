'use client'

import { useState } from 'react'
import { Field, PasswordInput } from '@fidely-ui/react'

export const PasswordInputField = () => {
  const [value, setValue] = useState('')
  const isInvalid = value.length < 3

  return (
    <Field.Root invalid={isInvalid} required>
      <PasswordInput.Root>
        <PasswordInput.Label>
          Password <Field.RequiredIndicator />
        </PasswordInput.Label>
        <PasswordInput.Control>
          <PasswordInput.Input onChange={(e) => setValue(e.target.value)} />
          <PasswordInput.VisibilityTrigger>
            <PasswordInput.Indicator />
          </PasswordInput.VisibilityTrigger>
        </PasswordInput.Control>
      </PasswordInput.Root>
      <Field.HelperText>Enter your password</Field.HelperText>
      <Field.Error>Password must be greater than 3 chars.</Field.Error>
    </Field.Root>
  )
}
