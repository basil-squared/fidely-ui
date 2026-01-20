import Link from 'next/link'
import { Button, Flex, HStack, Icon, Menu, Portal } from '@fidely-ui/react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import packageJson from '@fidely-ui/react/package.json'

const prevVersions = [
  {
    id: 1,
    version: 'v1.x',
    url: 'https://v1-fidely-ui.vercel.app/',
  },
]

export const VersionSwitcher = () => {
  return (
    <>
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button
            variant="outline"
            size="sm"
            aria-label="Select documentation version"
          >
            {packageJson.version} <Menu.Indicator />
          </Button>
        </Menu.Trigger>

        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              <Menu.ItemGroup>
                {prevVersions.map((version) => (
                  <Menu.Item value={version.version} key={version.id} asChild>
                    <Link
                      href={version.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Flex justify="space-between" align="center" width="full">
                        <HStack>{version.version}</HStack>
                        <HStack gap="0">
                          <Icon size="xs">
                            <FaExternalLinkAlt />
                          </Icon>
                        </HStack>
                      </Flex>
                    </Link>
                  </Menu.Item>
                ))}

                {/* <Menu.Separator /> */}
              </Menu.ItemGroup>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </>
  )
}
