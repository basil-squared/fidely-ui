'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Box } from '@fidely-ui/react/box'
import { Button } from '@fidely-ui/react/button'
import { Flex } from '@fidely-ui/react/flex'
import { IconButton } from '@fidely-ui/react/icon-button'
import { CommandInput } from '@fidely-ui/react/command-input'
import { Text } from '@fidely-ui/react/text'
import { useDialog } from '@fidely-ui/react/dialog'
import { FaGithub, FaBars } from 'react-icons/fa6'
import { FcLike } from 'react-icons/fc'

import { ColorModeButton } from '~/components/color-mode-button'
import { Drawer } from '~/components/drawer'
import { AppLogo } from '~/components/logo'
import { SearchDialog } from '~/components/search-dialog'

export const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev)
  const closeDrawer = () => setIsDrawerOpen(false)

  const dialog = useDialog()

  const navLinks = [
    { href: '/docs/getting-started/installation', label: 'Docs' },
    // { href: '#', label: 'Blogs' },
  ]

  return (
    <Box
      as="nav"
      bg={'bg.default'}
      backdropFilter="blur(10px)"
      shadow={'2xs'}
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
          <Button variant={'ghost'} ripple asChild>
            <Link
              href={'https://ko-fi.com/fidely_ui'}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FcLike /> Sponsor
            </Link>
          </Button>

          <CommandInput
            onOpen={() => dialog.setOpen(true)}
            width={'200px'}
            shortcut="/"
          />

          {navLinks.map(({ href, label }, index: number) => (
            <Text
              key={index}
              transition="color 0.2s ease"
              _hover={{
                color: 'fg.subtle',
                _dark: { color: 'fg.muted' },
              }}
            >
              <Link href={href}>{label}</Link>
            </Text>
          ))}

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
        <Box display={{ base: 'block', md: 'none' }}>
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
      />

      {/* search dialog/combobox */}
      <SearchDialog value={dialog} />
    </Box>
  )
}
