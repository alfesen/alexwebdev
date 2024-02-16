import { useEffect } from 'react'
import { Helmet } from 'react-helmet'
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
    <>
      <Helmet>
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="I am web developer based in Warsaw Poland. I create websites using the most contemporary technologies, with special emphasis on performance, accessibility and SEO."
        />
        <title>
          AlexWebDev -{' '}
          {navigator.language.includes('pl')
            ? 'strony internetowe dla Ciebie i Twojego biznesu'
            : 'Websites For Yourself and Your Business'}
        </title>
      </Helmet>
      <QueryClientProvider client={queryClient}>
        <MainLayout>
          <About />
          <Promotion />
          <TechStack />
          <Contact />
        </MainLayout>
      </QueryClientProvider>
    </>
  )
}

export default App
