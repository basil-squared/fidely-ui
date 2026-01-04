import { ReactNode } from 'react'
import { Box } from '@fidely-ui/react/box'
import { CommandInput } from '@fidely-ui/react/command-input'

interface DrawerProps {
  isOpen: boolean
  isInput?: boolean
  closeDrawer: () => void
  commandOpen?: () => void
  children: ReactNode
}

export const Drawer = (props: DrawerProps) => {
  const { isOpen, isInput = true, closeDrawer, commandOpen, children } = props

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <Box
        css={{
          position: 'fixed',
          inset: '0',
          bg: 'black/40',
          backdropFilter: 'blur(6px)',
          zIndex: 40,
        }}
        onClick={closeDrawer}
      />

      {/* Drawer Panel */}
      <Box
        css={{
          position: 'fixed',
          overflowY: 'auto',
          top: 0,
          right: 0,
          width: '70%',
          height: '100%',
          bg: 'bg.default',
          p: '20px',
          zIndex: 50,
          boxShadow: 'xl',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          transition: 'transform 0.25s ease',
        }}
      >
        {isInput && <CommandInput onOpen={commandOpen} shortcut="/" />}

        {children}
      </Box>
    </>
  )
}
