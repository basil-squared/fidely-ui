---
'@fidely-ui/react': major
'@fidely-ui/panda-preset': major
---

Upgrade Fidely UI to **v2 beta** with breaking changes and a new modular architecture.

## Breaking Changes

- Removed `@fidely-ui/styled-system` package
- Removed ripple effects from `Button` and related keyframes
- Removed `SkeletonText` component
- Removed `FloatInput` component
- Removed `ark-ui` from presets
- Removed unused collections
  - createFileTreeCollection
  - createTreeCollection,
  - FilePathTreeNode,
  - FlatTreeNode,
  - TreeCollection,
  - TreeCollectionOptions,
  - TreeNode,
- Added presets anatomy (new structure)

## Changes

- Added `Unstyled` type to all slot components and `unstyled` prop to `makeStyleContext`
- Added Fidely factory API
- Added new `Popover` component with documentation
- Added new `Icon` component with documentation
- Added `size` variants to `InputGroup`
- Added `size` variants to `CommandInput`
- Added `isOpen` prop to `CommandInput` to track open/close state when used with `Dialog` or `Combobox`
- Added size variants to `CommandInput` and `InputGroup`
- Refactored `CommandInput` using `useCommand` hook and `isOpen` prop
- Updated global `::selection` background style
- Re-exported `ark-ui` locales
