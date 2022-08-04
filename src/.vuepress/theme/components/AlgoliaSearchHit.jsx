
export function HitComponent (hit, children) {
  // debugger
  return () => (
    <a href={hit.url}>{children}</a>
  )
}