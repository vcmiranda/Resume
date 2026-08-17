import { useEffect, useRef, useState } from 'react'
import { cn } from '@vcm/ui'

/**
 * Fades and rises its children once, when they first enter the viewport.
 * The animating class is only attached after mount, so prerendered HTML stays
 * readable without JavaScript.
 */
export function Reveal({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement>(null)
  const [armed, setArmed] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    setArmed(true)

    if (!('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn(armed && 'reveal', visible && 'is-visible', className)}
      {...props}
    >
      {children}
    </div>
  )
}
