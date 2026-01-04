'use client'

import Link from 'next/link'
import { Fragment, useState } from 'react'
import { Box } from '@fidely-ui/react/box'
import { Button } from '@fidely-ui/react/button'
import { Flex } from '@fidely-ui/react/flex'
import { IconButton } from '@fidely-ui/react/icon-button'
import { CommandInput } from '@fidely-ui/react/command-input'
import { Text } from '@fidely-ui/react/text'
import { useDialog } from '@fidely-ui/react/dialog'
import { Stack } from '@fidely-ui/react/stack'
import { FaGithub, FaBars } from 'react-icons/fa6'
import { FcLike } from 'react-icons/fc'

import { ColorModeButton } from '~/components/color-mode-button'
import { Drawer } from '~/components/drawer'
import { AppLogo } from '~/components/logo'
import { SearchDialog } from '~/components/search-dialog'
import { NavItem } from '~/components/nav-item'
import {
  asideComponentLinks,
  asideUtilLinks,
} from '~/constant/aside-component-links'

export const DocNavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev)
  const closeDrawer = () => setIsDrawerOpen(false)

  const dialog = useDialog()

  return (
    <Box
      as="nav"
      bg="bg.default"
      backdropFilter="blur(10px)"
      shadow="2xs"
      px="4"
      py="4"
    >
      <Flex
        w="90%"
        mx="auto"
        alignItems="center"
        justifyContent="space-between"
      >
        {/* Logo */}
        <AppLogo />

        {/* Desktop Nav */}
        <Flex
          gap="3"
          alignItems="center"
          display={{ base: 'none', md: 'flex' }}
        >
          <Button variant="ghost" ripple asChild>
            <Link
              href="https://ko-fi.com/fidely_ui"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FcLike /> Sponsor
            </Link>
          </Button>

          <CommandInput
            onOpen={() => dialog.setOpen(true)}
            width="200px"
            shortcut="/"
          />

          <IconButton
            asChild
            aria-label="GitHub Repository"
            variant="ghost"
            size="xs"
          >
            <Link
              href="https://github.com/fidely-ui/fidely-ui"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={18} />
            </Link>
          </IconButton>

          <ColorModeButton />
        </Flex>

        {/* Mobile Menu Button */}
        <Box display={{ base: 'flex', md: 'none' }} alignItems="center">
          <IconButton
            asChild
            aria-label="Sponsor Fidely UI"
            variant="plain"
            size="xs"
          >
            <Link
              href="https://ko-fi.com/fidely_ui"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FcLike />
            </Link>
          </IconButton>

          <ColorModeButton />

          <IconButton
            asChild
            aria-label="GitHub Repository"
            variant="plain"
            size="xs"
          >
            <Link
              href="https://github.com/fidely-ui/fidely-ui"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={18} />
            </Link>
          </IconButton>

          <IconButton
            aria-label="Toggle Menu"
            variant="ghost"
            size="sm"
            onClick={toggleDrawer}
          >
            <FaBars size={18} />
          </IconButton>
        </Box>
      </Flex>

      {/* Mobile Menu Drawer */}
      <Drawer
        isOpen={isDrawerOpen}
        closeDrawer={closeDrawer}
        commandOpen={() => dialog.setOpen(true)}
      >
        <DocsMobileLinks closeDrawer={closeDrawer} />
      </Drawer>

      {/* search dialog/combobox */}
      <SearchDialog value={dialog} />
    </Box>
  )
}

interface DocsMobileLinksProps {
  closeDrawer: () => void
}

const DocsMobileLinks = ({ closeDrawer }: DocsMobileLinksProps) => {
  return (
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
        <Text fontSize="14px">Theming</Text>

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
  )
}
