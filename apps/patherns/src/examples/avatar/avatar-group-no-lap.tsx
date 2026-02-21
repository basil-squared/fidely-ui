import { Avatar, AvatarGroup } from '@fidely-ui/react/avatar'
import { imgUrl } from './avatar-group-basics'

export const AvatarGroupNoLap = () => {
  return (
    <AvatarGroup attached={false} overlap={false}>
      {imgUrl.map((data) => (
        <Avatar.Root size={'lg'} key={data.id}>
          <Avatar.Fallback />
          <Avatar.Image src={data.img} />
        </Avatar.Root>
      ))}
    </AvatarGroup>
  )
}
