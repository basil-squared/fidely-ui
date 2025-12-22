import { Avatar } from '@fidely-ui/react/avatar'

export const AvatarBasics = () => {
  return (
    <>
      <Avatar.Root size={'lg'}>
        <Avatar.Fallback name="Justice Chimobi" />
        <Avatar.Image src={'/justice-chimobi.jpeg'} />
      </Avatar.Root>
    </>
  )
}
