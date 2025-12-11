'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import {
  Combobox,
  Dialog,
  HStack,
  Portal,
  Span,
  Stack,
  Text,
  useListCollection,
  type UseDialogReturn,
} from '@fidely-ui/react'
import { matchSorter } from 'match-sorter'
import { LuCircleDashed } from 'react-icons/lu'
import { IoArrowForward } from 'react-icons/io5'

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
                          No results found for!{' '}
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
                        <HStack>
                          {item.category === 'Get started' ||
                          item.category === 'Utilities' ? (
                            <IoArrowForward
                              size={18}
                              style={{ marginTop: 2.5 }}
                            />
                          ) : (
                            <LuCircleDashed
                              size={18}
                              style={{ marginTop: 2.5 }}
                            />
                          )}

                          <Stack>
                            <Combobox.ItemText>{item.label}</Combobox.ItemText>
                            <Combobox.ItemText fontSize="xs" color="fg.muted">
                              {item.category}
                            </Combobox.ItemText>
                          </Stack>
                        </HStack>
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
