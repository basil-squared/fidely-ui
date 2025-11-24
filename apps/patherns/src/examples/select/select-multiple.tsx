'use client'

import { createListCollection, Portal, Select } from '@fidely-ui/react'

export const SelectMultiple = () => {
  const collection = createListCollection({
    items: ['React', 'Solid', 'Vue', 'Svelte'],
  })

  return (
    <Select.Root
      collection={collection}
      positioning={{ sameWidth: true }}
      maxW={'350px'}
      multiple
    >
      <Select.Label>Framework</Select.Label>
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
  )
}
