/**
 * The four registration marks every framed object in this system wears.
 * Drop inside an element carrying the `blueprint` class.
 */
export function Blueprint() {
  return (
    <>
      <i aria-hidden className="corner tl" />
      <i aria-hidden className="corner tr" />
      <i aria-hidden className="corner bl" />
      <i aria-hidden className="corner br" />
    </>
  )
}
