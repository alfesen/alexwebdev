import MainLayout from "./components/Layout/MainLayout"
import About from "./components/Sections/About/About"
import Promotion from "./components/Sections/Promotion/Promotion"

function App() {
  return (
    <MainLayout>
      <About />
      <Promotion />
    </MainLayout>
  )
}

export default App
