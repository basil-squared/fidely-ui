'use client'

import { Box } from '@fidely-ui/react/box'
import { Tabs } from '@fidely-ui/react/tabs'
import { Center } from '@fidely-ui/react/center'
import { Grid, GridItem } from '@fidely-ui/react/grid'
import { Heading } from '@fidely-ui/react/heading'

import {
  TeamMembers,
  PaymentMethod,
  BillingAddress,
  TabsExample,
  ProcessingCard,
  MoreComponents,
} from '~/components/examples/examples'
import { AuthenticationExample } from '~/components/examples/authentication'
import { DashboardExample } from '~/components/examples/dashboard-example'

const exampleComponents = [
  BillingAddress,
  PaymentMethod,
  MoreComponents,
  ProcessingCard,
  TabsExample,
  TeamMembers,
]

export const ExampleSection = () => {
  return (
    <Box minH="auto" width={'90%'} mx={'auto'}>
      <Center minH="100px">
        <Heading size="2xl" colorPalette="orange" color="colorPalette.default">
          Quick Examples
        </Heading>
      </Center>
      <Tabs.Root variant="underline" defaultValue="examples">
        <Tabs.List>
          {['examples', 'dashboard', 'authentication'].map((tab) => (
            <Tabs.Trigger
              key={tab}
              value={tab}
              _selected={{ color: 'orange.9' }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        <Tabs.Content value="examples">
          <Grid
            gridTemplateColumns={{
              base: '1fr',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
            }}
            gap={{ base: '2', md: '3' }}
          >
            {exampleComponents.map((Component, i) => (
              <GridItem
                key={i}
                height="min-content"
                width={{ base: '90%', md: '100%' }}
              >
                <Component />
              </GridItem>
            ))}
          </Grid>
        </Tabs.Content>

        <Tabs.Content value="dashboard">
          <DashboardExample />
        </Tabs.Content>

        <Tabs.Content value="authentication" width={'100%'}>
          <AuthenticationExample />
        </Tabs.Content>
      </Tabs.Root>
    </Box>
  )
}
