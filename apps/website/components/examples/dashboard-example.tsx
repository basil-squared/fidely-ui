'use client'

import * as React from 'react'
import { Avatar } from '@fidely-ui/react/avatar'
import { Badge } from '@fidely-ui/react/badge'
import { Box } from '@fidely-ui/react/box'
import { Card } from '@fidely-ui/react/card'
import { Flex } from '@fidely-ui/react/flex'
import { Grid, GridItem } from '@fidely-ui/react/grid'
import { IconButton } from '@fidely-ui/react/icon-button'
import { Input } from '@fidely-ui/react/input'
import { InputGroup } from '@fidely-ui/react/input-group'
import { InputAddon } from '@fidely-ui/react/input-addon'
import { Persona } from '@fidely-ui/react/persona'
import { Table } from '@fidely-ui/react/table'
import { Text } from '@fidely-ui/react/text'
import { Heading } from '@fidely-ui/react/heading'
import { Stack } from '@fidely-ui/react/stack'
import { Menu } from '@fidely-ui/react/menu'
import { Portal } from '@fidely-ui/react/portal'
import { BiSearch } from 'react-icons/bi'
import { FaArrowTrendUp } from 'react-icons/fa6'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'

import {
  asideItems,
  exampleDashboardData,
  exampleUsersData,
} from '~/constant/example-contants'
import { LuChevronRight } from 'react-icons/lu'

export const DashboardExample = () => {
  const [searchValue, setSearchValue] = React.useState('')

  return (
    <Box
      height={'auto'}
      display={'flex'}
      borderRadius={'12px'}
      overflow={'hidden'}
      borderWidth={'1px'}
      borderColor={'bg.emphasized'}
    >
      <Box
        width={'20%'}
        bg={'bg.emphasized'}
        height={'100vh'}
        display={{ base: 'none', md: 'block' }}
      >
        <DashboardSideBar />
      </Box>

      <Box width={{ base: '100%', md: '80%' }}>
        <DashboardNavBar onSearchChange={setSearchValue} />

        <DashboardMain searchValue={searchValue} />
      </Box>
    </Box>
  )
}

export const DashboardSideBar = () => {
  return (
    <Box position={'relative'} height={'100vh'}>
      <Box padding={'10px'} borderBottom={'0.6px solid white'}>
        <Heading fontWeight={'bold'} as={'h3'} textStyle={'2xl'}>
          Fidely Inc.
        </Heading>
      </Box>

      <Box mt={'15px'}>
        {asideItems.map((nav) => (
          <Text
            padding={'12px'}
            _hover={{ bg: 'bg.subtle' }}
            cursor={'pointer'}
            key={nav.label}
            display={'flex'}
            alignItems={'center'}
            gap={'2'}
          >
            <nav.icon /> {nav.label}
          </Text>
        ))}
      </Box>

      <Box position={'absolute'} bottom={'0px'} padding={'10px'}>
        <Persona
          name="Justice Chimobi"
          title="Creator Fidely UI"
          img={'/justice-chimobi.jpeg'}
          size="sm"
        />
      </Box>
    </Box>
  )
}

interface DashboardNavBarProps {
  onSearchChange: (value: string) => void
}

export const DashboardNavBar = ({ onSearchChange }: DashboardNavBarProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value)
  }

  return (
    <Flex padding={'10px'}>
      <Box width={'80%'}>
        <InputGroup colorPalette="orange">
          <InputAddon bg={'bg.emphasized'}>
            <BiSearch />
          </InputAddon>
          <Input
            placeholder="search dashboard..."
            onChange={handleInputChange}
          />
        </InputGroup>
      </Box>

      <Box width={'20%'}>
        <Flex justifyContent={'flex-end'} alignItems={'center'} gap={'4px'}>
          <Menu.Root>
            <Menu.Trigger
              cursor="pointer"
              rounded="full"
              focusRing="outside"
              focusRingColor={'orange.9'}
              aria-label="Open account menu"
            >
              <Avatar.Root size={'sm'}>
                <Avatar.Fallback name="Justice Chimobi" />
                <Avatar.Image
                  src={'/justice-chimobi.jpeg'}
                  alt="Justice Chimobi"
                />
              </Avatar.Root>
            </Menu.Trigger>

            <Portal>
              <Menu.Positioner>
                <Menu.Content>
                  <Menu.Item value="account">Account</Menu.Item>
                  <Menu.Item value="setting">Setting</Menu.Item>
                  <Menu.Separator />
                  <Menu.Item value="logout">Logout</Menu.Item>
                </Menu.Content>
              </Menu.Positioner>
            </Portal>
          </Menu.Root>
        </Flex>
      </Box>
    </Flex>
  )
}

interface DashboardMainProps {
  searchValue: string
}

export const DashboardMain = ({ searchValue }: DashboardMainProps) => {
  const filteredUsers = React.useMemo(() => {
    const query = searchValue.toLocaleLowerCase().trim()
    if (!query) return exampleUsersData

    return exampleUsersData.filter((d) =>
      [d.user.name, d.user.email].some((field) =>
        field.toLocaleLowerCase().includes(query)
      )
    )
  }, [searchValue])

  return (
    <Box padding={'10px'}>
      <Grid
        mx="auto"
        gridTemplateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }}
        gap={{ base: '2', md: '1.5' }}
      >
        {exampleDashboardData.map((data) => (
          <GridItem key={data.id}>
            <Card.Root>
              <Card.Body>
                <Flex
                  justifyContent={'space-between'}
                  alignItems={'flex-start'}
                >
                  <Stack gap={'2'}>
                    <Heading as={'h5'}>{data.name}</Heading>
                    <Text textStyle={'md'}>{data.numbers}</Text>
                  </Stack>

                  <Box>
                    <FaArrowTrendUp />
                  </Box>
                </Flex>
              </Card.Body>
            </Card.Root>
          </GridItem>
        ))}
      </Grid>

      <Box mt={'25px'}>
        <Table.ScrollArea>
          <Table.Root hoverable size={'sm'}>
            <Table.Header>
              <Table.Row>
                <Table.HeadCell>Users</Table.HeadCell>
                <Table.HeadCell>Revenue</Table.HeadCell>
                <Table.HeadCell>Status</Table.HeadCell>
                <Table.HeadCell>Visits</Table.HeadCell>
                <Table.HeadCell></Table.HeadCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((d) => (
                  <Table.Row key={d.id}>
                    <Table.Cell>
                      <Persona
                        name={d.user.name}
                        title={d.user.email}
                        img={d.user.avatar}
                        size="md"
                      />
                    </Table.Cell>
                    <Table.Cell>{d.revenue}</Table.Cell>
                    <Table.Cell>
                      <Badge
                        size={'sm'}
                        colorPalette={d.status === 'Done' ? 'green' : ''}
                      >
                        {d.status}
                      </Badge>
                    </Table.Cell>
                    <Table.Cell>{d.id}</Table.Cell>
                    <Table.Cell textAlign={'right'}>
                      <Menu.Root>
                        <Menu.Trigger asChild>
                          <IconButton variant={'ghost'} size={'sm'}>
                            <HiOutlineDotsHorizontal />
                          </IconButton>
                        </Menu.Trigger>

                        <Portal>
                          <Menu.Positioner>
                            <Menu.Content>
                              <Menu.Item value="edit">Edit</Menu.Item>
                              <Menu.Root>
                                <Menu.TriggerItem>
                                  View <LuChevronRight />
                                </Menu.TriggerItem>
                                <Portal>
                                  <Menu.Positioner>
                                    <Menu.Content>
                                      <Menu.Item value="revenue">
                                        Revenue
                                      </Menu.Item>
                                      <Menu.Item value="transactions">
                                        Transactions
                                      </Menu.Item>
                                      <Menu.Item value="sales">Sales</Menu.Item>
                                    </Menu.Content>
                                  </Menu.Positioner>
                                </Portal>
                              </Menu.Root>
                              <Menu.Separator />
                              <Menu.Item
                                value="delete"
                                color="fg.error"
                                _hover={{ bg: 'red.2', color: 'fg.error' }}
                              >
                                Delete...
                              </Menu.Item>
                            </Menu.Content>
                          </Menu.Positioner>
                        </Portal>
                      </Menu.Root>
                    </Table.Cell>
                  </Table.Row>
                ))
              ) : (
                <Table.Row>
                  <Table.Cell colSpan={5} textAlign="center">
                    No matching users found.
                  </Table.Cell>
                </Table.Row>
              )}
            </Table.Body>
          </Table.Root>
        </Table.ScrollArea>
      </Box>
    </Box>
  )
}
