import { Avatar, Profile } from '@fidely-ui/react'

export const ProfileBasics = () => {
  return (
    <Profile.Root>
      <Profile.AvatarWrapper>
        <Avatar.Root>
          <Avatar.Fallback name="Justice Chimobi" />
          <Avatar.Image src="https://avatars.githubusercontent.com/u/74328318?v=4" />
        </Avatar.Root>
      </Profile.AvatarWrapper>

      <Profile.Details>
        <Profile.Name>Justice Chimobi</Profile.Name>
        <Profile.Title>Frontend Engineer</Profile.Title>
      </Profile.Details>
    </Profile.Root>
  )
}
