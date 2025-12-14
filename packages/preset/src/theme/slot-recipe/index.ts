import { type SlotRecipeConfig } from '@pandacss/dev'

import { avatarSlotRecipe } from './avatar.recipe'
import { cardSlotRecipe } from './card.recipe'
import { tabsSlotRecipe } from './tabs.recipe'
import { fieldSlotRecipe } from './field.recipe'
import { clipboardSlotRecipe } from './clipboard.recipe'
import { accordionSlotRecipe } from './accordion.recipe'
import { switchSlotRecipe } from './switch.recipe'
import { tableSlotRecipe } from './table.recipe'
import { pinInputSlotRecipe } from './pinInput.recipe'
import { checkboxSlotRecipe } from './checkbox.recipe'
import { selectSlotRecipe } from './select.recipe'
import { dialogSlotRecipe } from './dialog.recipe'
import { passwordInputSlotRecipe } from './passwordInput.recipe'
import { comboboxSlotRecipe } from './combobox.recipe'
import { profileSlotRecipe } from './profile.recipe'
import { menuSlotRecipe } from './menu.recipe'
import { hoverCardSlotRecipe } from './hoverCard.recipe'
import { marqueeSlotRecipe } from './marquee.recipe'

export const slotRecipes: Record<string, Partial<SlotRecipeConfig>> = {
  accordion: accordionSlotRecipe,
  avatar: avatarSlotRecipe,
  card: cardSlotRecipe,
  checkbox: checkboxSlotRecipe,
  clipboard: clipboardSlotRecipe,
  combobox: comboboxSlotRecipe,
  dialog: dialogSlotRecipe,
  field: fieldSlotRecipe,
  hoverCard: hoverCardSlotRecipe,
  marquee: marqueeSlotRecipe,
  menu: menuSlotRecipe,
  passwordInput: passwordInputSlotRecipe,
  pinInput: pinInputSlotRecipe,
  profile: profileSlotRecipe,
  switchRecipe: switchSlotRecipe,
  tabs: tabsSlotRecipe,
  table: tableSlotRecipe,
  select: selectSlotRecipe,
}
