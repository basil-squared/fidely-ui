import { Footer } from '~/components/footer'
import { SiteNavBar } from '~/components/site-navbar'

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SiteNavBar />
      {children}
      <Footer />
    </>
  )
}
