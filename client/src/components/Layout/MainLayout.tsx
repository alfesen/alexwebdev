import Header from './Header/Header'
import { TChildren } from '@/types/layout'

const MainLayout = ({ children }: TChildren) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default MainLayout
