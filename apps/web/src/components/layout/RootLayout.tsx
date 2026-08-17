import { Outlet } from 'react-router'
import { Header } from './Header'
import { Footer } from './Footer'
import { SkipLink } from './SkipLink'
import { useScrollToTop } from '@/hooks/useScrollToTop'

export function RootLayout() {
  useScrollToTop()
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
