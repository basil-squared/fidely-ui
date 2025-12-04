'use client'

import Link from 'next/link'
import * as React from 'react'
import { Box } from '@fidely-ui/react/box'
import { Flex } from '@fidely-ui/react/flex'
import { Stack } from '@fidely-ui/react/stack'
import { Text } from '@fidely-ui/react/text'
import { Span } from '@fidely-ui/react/span'

import {
  asideComponentLinks,
  asideUtilLinks,
} from '~/constant/aside-component-links'
import { NavItem } from '~/components/nav-item'

export const DocsPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex height="100vh" bg="bg.default">
      <Box
        as="aside"
        w={{ base: '64', md: '72' }}
        p="6"
        borderRight="1px solid"
        borderColor="border.default"
        position="sticky"
        top="0"
        h="100vh"
        overflowY="auto"
        display={{ base: 'none', md: 'block' }}
      >
        <Sidebar />
      </Box>

      {/* Main Content */}
      <Box as="main" flex="1" p={{ base: '2', md: '10' }} overflowY="auto">
        {children}
      </Box>
    </Flex>
  )
}

function Sidebar() {
  return (
    <Box
      w={{ base: '64', md: '72' }}
      p="6"
      borderRight="1px solid"
      borderColor="border.default"
      position="sticky"
      top="0"
      h="100vh"
      overflowY="auto"
    >
      <Stack gap="6">
        {/* Getting Started */}
        <Stack gap="3">
          <Text color={'fg.default'}>Getting Started</Text>
          <Link
            href="/docs/getting-started/introduction"
            style={{ marginLeft: '6px' }}
          >
            <Span color={'fg.muted'} fontSize={'13px'}>
              Introduction
            </Span>
          </Link>

          <Link
            href="/docs/getting-started/installation"
            style={{ marginLeft: '6px' }}
          >
            <Span color={'fg.muted'} fontSize={'13px'}>
              Installation
            </Span>
          </Link>
        </Stack>

        {/* Theming */}
        <Stack gap="3">
          <Text color="fg.default" fontSize="14px">
            Theming
          </Text>

          <NavItem href="/docs/theming/customization" label="Customization" />
          <NavItem
            href="/docs/theming/semantic-tokens"
            label="Semantic tokens"
          />
          <NavItem href="/docs/theming/colors" label="Colors" />
        </Stack>

        {/* Styling */}
        <Stack gap="3">
          <Text color="fg.default">Styling</Text>

          <NavItem href="/docs/styling/dark-mode" label="Dark Mode" />
        </Stack>

        {/* Components */}
        <Stack gap="3">
          {asideComponentLinks.map((section, index: number) => (
            <React.Fragment key={index}>
              <Text fontSize={'14px'}>{section.section}</Text>

              {section.items.map((item) => (
                <NavItem
                  key={item.name}
                  href={`/docs/components/${item.linkUrl}`}
                  label={item.name}
                  info={item.info}
                />
              ))}
            </React.Fragment>
          ))}
        </Stack>

        {/* Utilities */}
        <Stack gap="3">
          {asideUtilLinks.map((section, index: number) => (
            <React.Fragment key={index}>
              <Text fontSize={'14px'}>{section.section}</Text>

              {section.items.map((item) => (
                <NavItem
                  key={item.name}
                  href={`/docs/utilities/${item.linkUrl}`}
                  label={item.name}
                  info={item.info}
                />
              ))}
            </React.Fragment>
          ))}
        </Stack>
      </Stack>
    </Box>
  )
}
