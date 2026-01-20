'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Box } from '@fidely-ui/react/box'
import { Flex } from '@fidely-ui/react/flex'
import { IconButton } from '@fidely-ui/react/icon-button'
import { Text } from '@fidely-ui/react/text'
import { useDialog } from '@fidely-ui/react/dialog'
import { Stack } from '@fidely-ui/react/stack'
import { FaGithub, FaBars } from 'react-icons/fa6'

import { ColorModeButton } from '~/components/color-mode-button'
import { Drawer } from '~/components/drawer'
import { AppLogo } from '~/components/logo'
import { InfoBadge, NavItem } from '~/components/nav-item'

export const SiteNavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev)
  const closeDrawer = () => setIsDrawerOpen(false)

  const dialog = useDialog()

  const navLinks = [
    { href: '/docs/getting-started/introduction', label: 'Docs', info: false },
    { href: '#', label: 'Templates', info: true },
    { href: '/docs/components/accordion', label: 'Components', info: false },
  ]

  return (
    <Box as="nav" px="4" py="4">
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
          {navLinks.map(({ href, label, info }, index) => (
            <Text
              key={index}
              transition="color 0.2s ease"
              _hover={{
                color: 'fg.subtle',
                _dark: { color: 'fg.muted' },
              }}
            >
              <Link href={href}>
                {label} {info && <InfoBadge info="soon" />}
              </Link>
            </Text>
          ))}

          <IconButton
            asChild
            aria-label="GitHub Repository"
            variant="ghost"
            size="xs"
            title="Github"
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
        isInput={false}
        closeDrawer={closeDrawer}
        commandOpen={() => dialog.setOpen(true)}
      >
        <SiteMobileLinks closeDrawer={closeDrawer} />
      </Drawer>
    </Box>
  )
}

interface SiteMobileLinksProps {
  closeDrawer: () => void
}

const SiteMobileLinks = ({ closeDrawer }: SiteMobileLinksProps) => {
  return (
    <Stack mt="3">
      <Stack gap="8">
        <NavItem
          href="/docs/getting-started/installation"
          label="Documentation"
          closeDrawer={closeDrawer}
          fontSize="18px"
        />

        <NavItem
          href="/docs/components/accordion"
          label="Components"
          closeDrawer={closeDrawer}
          fontSize="18px"
        />
        <NavItem
          href="/docs/getting-started/installation"
          label="Templates"
          closeDrawer={closeDrawer}
          fontSize="18px"
        />
      </Stack>
    </Stack>
  )
}
