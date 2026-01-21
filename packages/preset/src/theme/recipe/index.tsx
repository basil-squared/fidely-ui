import type { RecipeConfig, RecipeVariantRecord } from '@pandacss/dev'

import { buttonRecipe } from './button.recipe'
import { spinnerRecipe } from './spinner.recipe'
import { paperRecipe } from './paper.recipe'
import { skeletonRecipe } from './skeleton.recipe'
import { inputRecipe } from './input.recipe'
import { kbdRecipe } from './kbd.recipe'
import { textareaRecipe } from './textarea.recipe'
import { commandInputRecipe } from './command-Input.recipe'
import { badgeRecipes } from './badge.recipe'
import { groupRecipe } from './group.recipe'
import { inputGroupRecipe } from './input.group'
import { inputAddonRecipe } from './input-addon.recipe'
import { headingRecipe } from './heading.recipe'
import { textRecipe } from './text.recipe'
import { iconRecipes } from './icon.recipe'

export const recipes: Record<
  string,
  Partial<RecipeConfig<RecipeVariantRecord>>
> = {
  badge: badgeRecipes,
  button: buttonRecipe,
  commandInput: commandInputRecipe,
  heading: headingRecipe,
  group: groupRecipe,
  icon: iconRecipes,
  input: inputRecipe,
  inputGroup: inputGroupRecipe,
  inputAddon: inputAddonRecipe,
  kbd: kbdRecipe,
  spinner: spinnerRecipe,
  paper: paperRecipe,
  skeleton: skeletonRecipe,
  text: textRecipe,
  textarea: textareaRecipe,
}
