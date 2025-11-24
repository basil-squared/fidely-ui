'use client'

import { createListCollection, Portal, Select, Stack } from '@fidely-ui/react'

export const SelectSize = () => {
  const collection = createListCollection({
    items: ['React', 'Solid', 'Vue', 'Svelte'],
  })

  const sizes = ['xs', 'sm', 'md', 'lg'] as const

  return (
    <Stack gap={3}>
      {sizes.map((size) => (
        <Select.Root
          collection={collection}
          positioning={{ sameWidth: true }}
          maxW={'350px'}
          size={size}
          key={size}
        >
          <Select.Label>{size}</Select.Label>
          <Select.Control>
            <Select.Trigger>
              <Select.ValueText placeholder="Select a Framework" />
            </Select.Trigger>
            <Select.IndicatorGroup>
              <Select.Indicator />
            </Select.IndicatorGroup>
          </Select.Control>
          <Portal>
            <Select.Positioner>
              <Select.Content>
                {collection.items.map((item) => (
                  <Select.Item key={item} item={item}>
                    <Select.ItemText>{item}</Select.ItemText>
                    <Select.ItemIndicator>✓</Select.ItemIndicator>
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Positioner>
          </Portal>
          <Select.HiddenSelect />
        </Select.Root>
      ))}
    </Stack>
  )
}
