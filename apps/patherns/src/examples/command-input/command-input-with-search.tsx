'use client'

import { useState } from 'react'
import {
  Combobox,
  CommandInput,
  Dialog,
  Persona,
  Portal,
  useFilter,
  useListCollection,
} from '@fidely-ui/react'

export const CommandInputWithSearch = () => {
  const [open, setOpen] = useState(false)

  const { contains } = useFilter({ sensitivity: 'base' })

  const { collection, filter } = useListCollection({
    initialItems: persons,
    itemToString: (item) => item.name,
    itemToValue: (item) => item.id,
    filter: contains,
  })

  const handleFilter = (e: Combobox.InputValueChangeDetails) => {
    filter(e.inputValue)
  }

  return (
    <>
      <CommandInput
        onOpen={() => setOpen(true)}
        isOpen={open}
        shortcut="⌘ + s"
        aria-label="Search list of users"
        placeholder="search users..."
        bg="transparent"
      />

      <Dialog.Root open={open} onOpenChange={(e) => setOpen(e.open)} lazyMount>
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
                  collection={collection}
                  onInputValueChange={handleFilter}
                >
                  <Combobox.Control>
                    <Combobox.Input placeholder="Search users..." />
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
                      <Combobox.Empty>No person found.</Combobox.Empty>
                      {collection.items.map((item) => (
                        <Combobox.Item key={item.id} item={item}>
                          <Persona
                            title={item.role}
                            name={item.name}
                            img={item.avatar}
                            size="xs"
                          />
                          <Combobox.ItemIndicator>✓</Combobox.ItemIndicator>
                        </Combobox.Item>
                      ))}
                    </Combobox.Content>
                  </Combobox.Positioner>
                </Combobox.Root>
              </Dialog.Body>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </>
  )
}

const persons = [
  {
    id: '1',
    name: 'Sarah Thompson',
    role: 'UI/UX Designer',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: '2',
    name: 'David Johnson',
    role: 'Frontend Engineer',
    avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
  },
  {
    id: '3',
    name: 'Amelia Brown',
    role: 'Product Manager',
    avatar: 'https://randomuser.me/api/portraits/women/19.jpg',
  },
  {
    id: '4',
    name: 'James Carter',
    role: 'Backend Developer',
    avatar: 'https://randomuser.me/api/portraits/men/55.jpg',
  },
  {
    id: '5',
    name: 'Emily Wilson',
    role: 'Mobile Developer',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    id: '6',
    name: 'Michael Anderson',
    role: 'DevOps Engineer',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: '7',
    name: 'Sophia Martinez',
    role: 'QA Analyst',
    avatar: 'https://randomuser.me/api/portraits/women/62.jpg',
  },
  {
    id: '8',
    name: 'Liam Roberts',
    role: 'Full Stack Engineer',
    avatar: 'https://randomuser.me/api/portraits/men/71.jpg',
  },
  {
    id: '9',
    name: 'Olivia Parker',
    role: 'Data Scientist',
    avatar: 'https://randomuser.me/api/portraits/women/53.jpg',
  },
  {
    id: '10',
    name: 'Noah Davis',
    role: 'AI Researcher',
    avatar: 'https://randomuser.me/api/portraits/men/29.jpg',
  },
]
