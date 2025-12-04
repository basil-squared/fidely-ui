import { Fragment } from 'react'
import { css } from '@fidely-ui/styled-system/css'
import { Box } from '@fidely-ui/react/box'
import { Stack } from '@fidely-ui/react/stack'
import { CommandInput } from '@fidely-ui/react/command-input'
import { Text } from '@fidely-ui/react/text'

import {
  asideComponentLinks,
  asideUtilLinks,
} from '~/constant/aside-component-links'
import { NavItem } from '~/components/nav-item'

interface DrawerProps {
  isOpen: boolean
  closeDrawer: () => void
  commandOpen: () => void
}

export const Drawer = (props: DrawerProps) => {
  const { isOpen, closeDrawer, commandOpen } = props

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <Box
        className={css({
          position: 'fixed',
          inset: '0',
          bg: 'black/40',
          backdropFilter: 'blur(6px)',
          zIndex: 40,
        })}
        onClick={closeDrawer}
      />

      {/* Drawer Panel */}
      <Box
        className={css({
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
        })}
      >
        <CommandInput onOpen={commandOpen} shortcut="/" />

        <Stack gap="6" mt="5">
          {/* Getting Started */}
          <Stack gap="3">
            <Text color="fg.default">Getting Started</Text>

            <NavItem
              href="/docs/getting-started/introduction"
              label="Introduction"
              closeDrawer={closeDrawer}
            />
            <NavItem
              href="/docs/getting-started/installation"
              label="Installation"
              closeDrawer={closeDrawer}
            />
          </Stack>

          {/* Theming */}
          <Stack gap="3">
            <Text color="fg.default" fontSize="14px">
              Theming
            </Text>

            <NavItem
              href="/docs/theming/customization"
              label="Customization"
              closeDrawer={closeDrawer}
            />
            <NavItem
              href="/docs/theming/semantic-tokens"
              label="Semantic tokens"
              closeDrawer={closeDrawer}
            />
            <NavItem
              href="/docs/theming/colors"
              label="Colors"
              closeDrawer={closeDrawer}
            />
          </Stack>

          {/* Styling */}
          <Stack gap="3">
            <Text color="fg.default">Styling</Text>

            <NavItem
              href="/docs/styling/dark-mode"
              label="Dark Mode"
              closeDrawer={closeDrawer}
            />
          </Stack>

          {/* Components */}
          <Stack gap="3">
            {asideComponentLinks.map((section) => (
              <Fragment key={section.section}>
                <Text fontSize="14px">{section.section}</Text>
                {section.items.map((item) => (
                  <NavItem
                    key={item.name}
                    href={`/docs/components/${item.linkUrl}`}
                    label={item.name}
                    info={item.info}
                    closeDrawer={closeDrawer}
                  />
                ))}
              </Fragment>
            ))}
          </Stack>

          {/* Utilities */}
          <Stack gap="3">
            {asideUtilLinks.map((section) => (
              <Fragment key={section.section}>
                <Text fontSize="14px">{section.section}</Text>
                {section.items.map((item) => (
                  <NavItem
                    key={item.name}
                    href={`/docs/utilities/${item.linkUrl}`}
                    label={item.name}
                    info={item.info}
                    closeDrawer={closeDrawer}
                  />
                ))}
              </Fragment>
            ))}
          </Stack>
        </Stack>
      </Box>
    </>
  )
}
