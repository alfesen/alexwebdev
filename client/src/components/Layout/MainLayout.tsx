import Footer from './Footer/Footer'
import Header from './Header/Header'
import { TChildren } from '@/types/layout'

const MainLayout = ({ children }: TChildren) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default MainLayout
