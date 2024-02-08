import { useEffect } from 'react'
import MainLayout from './components/Layout/MainLayout'
import About from './components/Sections/About/About'
import Contact from './components/Sections/Contact/Contact'
import Promotion from './components/Sections/Promotion/Promotion'
import TechStack from './components/Sections/TechStack/TechStack'
import { QueryClient, QueryClientProvider } from 'react-query'
import emailjs from '@emailjs/browser'

function App() {
  const queryClient = new QueryClient()

  useEffect(() => {
    emailjs.init(process.env.EMAIL_PUBLIC_KEY as string)
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout>
        <About />
        <Promotion />
        <TechStack />
        <Contact />
      </MainLayout>
    </QueryClientProvider>
  )
}

export default App
