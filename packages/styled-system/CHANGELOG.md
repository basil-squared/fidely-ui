# @fidely-ui/styled-system

## 1.2.0

### Minor Changes

- Introduced a new Profile component and updated the Persona component to use it, including renaming `imgSize` to `size` for consistency.
- Added `stickyHeader` support to the Table component for improved usability.
- Updated `fidelyPreset` to allow calling it without options by applying default configuration automatically.
- Fixed the password-input visibility icon size.
- Fixed inconsistent icon sizes in the command-input component.

## 1.1.0

### Minor Changes

- Release 1.1.0 stable: pre-exit beta. Includes new `PasswordInput` and `Combobox` components, improved slot recipes, and internal consistency updates across input-based components, fix select, combobox, password input invalid state.

- [#84](https://github.com/fidely-ui/fidely-ui/pull/84) [`f581895`](https://github.com/fidely-ui/fidely-ui/commit/f581895df8dff8ecfd846536b9667697e173b281) Thanks [@chimobi-justice](https://github.com/chimobi-justice)! - feat: add `PasswordInput` and `Combobox` components

### Patch Changes

- [#76](https://github.com/fidely-ui/fidely-ui/pull/76) [`f024cb4`](https://github.com/fidely-ui/fidely-ui/commit/f024cb4b390306aa8b7eb3037207e885977cf403) Thanks [@chimobi-justice](https://github.com/chimobi-justice)! - externize fidely styled system

- [`2b2d0c2`](https://github.com/fidely-ui/fidely-ui/commit/2b2d0c2876695ed03b1ac1e66fc8bdddc71ae544) Thanks [@chimobi-justice](https://github.com/chimobi-justice)! - Rename package scope from @snaps-ui to @fidely-ui and prepare first beta release

- [#75](https://github.com/fidely-ui/fidely-ui/pull/75) [`2e910a4`](https://github.com/fidely-ui/fidely-ui/commit/2e910a470dbf5955fe6aa0bfc7bb603e22c899d6) Thanks [@chimobi-justice](https://github.com/chimobi-justice)! - fix: bundle Panda CSS recipes inside @fidely-ui/react

## 1.1.0-beta.4

### Minor Changes

- feat: add `PasswordInput` and `Combobox` components
  - Introduced new `PasswordInput` component with toggle visibility functionality and full theming support.
  - Added new `Combobox` component with keyboard navigation, async loading, and slot-based styling.
  - Updated recipes and slot recipes to include styles for both components.
  - Improved internal consistency across input-based components.

  This release adds two new components and represents a minor version bump.

## 1.0.1-beta.3

### Patch Changes

- externize fidely styled system

## 1.0.1-beta.2

### Patch Changes

- fix: bundle Panda CSS recipes inside @fidely-ui/react

## 1.0.1-beta.1

### Patch Changes

- Updated dependencies []:
  - @fidely-ui/panda-preset@1.0.1-beta.1

## 1.0.1-beta.0

### Patch Changes

- Rename package scope from @snaps-ui to @fidely-ui and prepare first beta release

- Updated dependencies []:
  - @fidely-ui/panda-preset@1.0.1-beta.0
