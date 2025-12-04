import { Avatar, Profile } from '@fidely-ui/react'

export const ProfileVertical = () => {
  return (
    <Profile.Root orientation="vertical">
      <Profile.AvatarWrapper>
        <Avatar.Root>
          <Avatar.Fallback name="Leanne Graham" />
          <Avatar.Image src="http://bit.ly/47jPX1D" />
        </Avatar.Root>
      </Profile.AvatarWrapper>

      <Profile.Details>
        <Profile.Name>Leanne Graham</Profile.Name>
        <Profile.Title>harness real-time e-markets</Profile.Title>
      </Profile.Details>
    </Profile.Root>
  )
}
