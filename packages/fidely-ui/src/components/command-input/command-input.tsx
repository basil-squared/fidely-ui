'use client'

import * as React from 'react'
import { ark } from '@ark-ui/react/factory'
import { commandInput } from 'styled-system/recipes'
import { ComponentProps } from 'styled-system/types'
import { styled } from 'styled-system/jsx'

import { Kbd } from '../kbd/index'
import { Flex } from '../flex/index'
import { Text } from '../text/index'
import { useCommand } from '../../hooks/useCommand'
import { FiSearch } from '../../icons/FiSearch'

const StyledCommandInput = styled(ark.button, commandInput)

type CommandInputBaseProps = ComponentProps<typeof StyledCommandInput>

export interface CommandInputProps extends CommandInputBaseProps {
  /**
   * Keyboard shortcut used to trigger the command menu/input.
   * Example: "Ctrl+K" or "⌘+K"
   */
  shortcut?: string

  /**
   * Callback fired when the command input is clicked
   * or when the keyboard shortcut is triggered.
   */
  onOpen?: () => void

  /**
   * Controls the open state of the command dialog.
   * Used for accessibility (`aria-expanded`).
   */
  isOpen?: boolean

  /**
   * Placeholder text displayed inside the command input.
   *
   * @default "Search..."
   */
  placeholder?: string

  /**
   * Optional element rendered on the left side of the input.
   * Falls back to a search icon when not provided.
   */
  leftElement?: React.ReactNode
}

export const CommandInput = React.forwardRef<
  HTMLButtonElement,
  CommandInputProps
>(function CommandInput(props, ref) {
  const {
    shortcut,
    onOpen,
    isOpen,
    placeholder = 'Search...',
    leftElement,
    className,
    ...rest
  } = props

  const { isMobile, shortcutLabel } = useCommand({
    shortcut,
    onTrigger: onOpen,
  })

  return (
    <StyledCommandInput
      ref={ref}
      type="button"
      onClick={onOpen}
      aria-haspopup="dialog"
      aria-expanded={isOpen}
      className={className}
      {...rest}
    >
      <Flex alignItems="center" gap="2">
        {leftElement ?? <FiSearch aria-hidden="true" focusable={false} />}
        <Text color="fg.muted">{placeholder}</Text>
      </Flex>

      {!isMobile && shortcutLabel ? (
        <Flex gap="1" aria-hidden="true">
          {shortcutLabel.split('+').map((key, i) => (
            <Kbd key={i}>{key.trim()}</Kbd>
          ))}
        </Flex>
      ) : null}
    </StyledCommandInput>
  )
})

CommandInput.displayName = 'CommandInput'
