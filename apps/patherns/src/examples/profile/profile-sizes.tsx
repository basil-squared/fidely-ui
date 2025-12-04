import { Avatar, Profile } from '@fidely-ui/react'

export const ProfileSizes = () => {
  return (
    <Profile.Root>
      <Profile.AvatarWrapper>
        <Avatar.Root size="lg">
          <Avatar.Fallback name="Leanne Graham" />
          <Avatar.Image src="http://bit.ly/47jPX1D" />
        </Avatar.Root>
      </Profile.AvatarWrapper>

      <Profile.Details>
        <Profile.Name textStyle="md">Leanne Graham</Profile.Name>
        <Profile.Title textStyle="sm">
          harness real-time e-markets
        </Profile.Title>
      </Profile.Details>
    </Profile.Root>
  )
}
