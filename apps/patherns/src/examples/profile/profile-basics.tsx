import { Avatar, Profile } from '@fidely-ui/react'

export const ProfileBasics = () => {
  return (
    <Profile.Root>
      <Profile.AvatarWrapper>
        <Avatar.Root>
          <Avatar.Fallback name="Justice Chimobi" />
          <Avatar.Image src="/justice-chimobi.jpeg" />
        </Avatar.Root>
      </Profile.AvatarWrapper>

      <Profile.Details>
        <Profile.Name>Justice Chimobi</Profile.Name>
        <Profile.Title>Frontend Engineer</Profile.Title>
      </Profile.Details>
    </Profile.Root>
  )
}
