export default function Layout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <main>
      <div>Hello Examples</div>
      {children}
    </main>
  )
}
