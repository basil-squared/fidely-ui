'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import {
  Badge,
  Combobox,
  Dialog,
  Flex,
  Portal,
  Span,
  Stack,
  Text,
  useListCollection,
  type UseDialogReturn,
} from '@fidely-ui/react'
import { matchSorter } from 'match-sorter'

import { data } from '~/lib/docsData'

export interface SearchDialogItem {
  label: string
  value: string
  category: string
  description: string
}

interface SearchDialogProps {
  value: UseDialogReturn
}

export const SearchDialog = ({ value }: SearchDialogProps) => {
  const [inputValue, setInputValue] = React.useState('')
  const router = useRouter()

  const { filteredItems } = useFilteredItems(data, inputValue)

  const { collection, set } = useListCollection<SearchDialogItem>({
    initialItems: [],
    itemToString: (item) => item.label,
    itemToValue: (item) => item.label,
  })

  React.useEffect(() => {
    set(filteredItems)
  }, [filteredItems, set])

  return (
    <Dialog.RootProvider value={value} size="lg">
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content h="50vh" overflow="auto">
            <Dialog.Body>
              <Combobox.Root
                open
                disableLayer
                selectionBehavior="clear"
                inputBehavior="autohighlight"
                loopFocus={false}
                placeholder="Search documentation..."
                collection={collection}
                onValueChange={(e) => {
                  value.setOpen(false)
                  const selectedItem = e.items[0]
                  if (selectedItem) {
                    router.push(`/docs/${selectedItem.value}`)
                  }
                }}
                onInputValueChange={({ inputValue }) =>
                  setInputValue(inputValue)
                }
              >
                <Combobox.Control>
                  <Combobox.Input placeholder="Search docs..." />
                </Combobox.Control>

                <Combobox.Positioner>
                  <Combobox.Content
                    boxShadow="none"
                    px="0"
                    py="0"
                    overflow="auto"
                    maxH="50vh"
                    overscrollBehavior="contain"
                  >
                    {filteredItems.length === 0 && (
                      <Stack p="3" align="center">
                        <Text>
                          No results found for{' '}
                          <Span fontWeight="bold" color="white">
                            {inputValue}
                          </Span>
                        </Text>
                      </Stack>
                    )}

                    {filteredItems.map((item) => (
                      <Combobox.Item
                        key={item.label}
                        item={item}
                        persistFocus
                        mb="1.5"
                      >
                        <Stack width="full">
                          <Flex gap="2">
                            <Badge size="sm" bg="blue.4" color="white">
                              <Text size="xs">{item.category}</Text>
                            </Badge>
                            <Text size="sm" fontWeight="semibold">
                              {item.label}
                            </Text>
                          </Flex>
                          <Combobox.ItemText asChild>
                            <Text size="xs" color="fg.muted" lineClamp="1">
                              {item.description}
                            </Text>
                          </Combobox.ItemText>
                        </Stack>
                      </Combobox.Item>
                    ))}
                  </Combobox.Content>
                </Combobox.Positioner>
              </Combobox.Root>
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.RootProvider>
  )
}

const useFilteredItems = (allItems: SearchDialogItem[], inputValue: string) => {
  const filteredItems = React.useMemo(() => {
    if (!inputValue) return allItems
    return matchSorter(allItems, inputValue, {
      keys: ['label', 'category'],
    }).slice(0, 10)
  }, [allItems, inputValue])

  return { filteredItems }
}
