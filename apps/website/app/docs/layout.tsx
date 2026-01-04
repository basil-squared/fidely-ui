import { DocNavBar } from '~/components/doc-navbar'

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <DocNavBar />
      {children}
    </>
  )
}
