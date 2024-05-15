import { Stack, Image } from "react-bootstrap"

const SocialLinks = () => {
  return (
    <Stack direction="horizontal" gap={3}>
      <Image src="/assets/ico-Facebook.svg" alt=""/>
      <Image src="/assets/ico-LinkedIn.svg" alt=""/>
      <Image src="/assets/ico-Instagram.svg" alt=""/>
      <Image src="/assets/ico-Youtube.svg" alt=""/>
    </Stack>
  )
}

export default SocialLinks