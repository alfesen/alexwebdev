import type { ReactNode } from 'react'
import Header from './Header/Header'

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default MainLayout
