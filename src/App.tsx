import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Navbar from "./components/Navbar/Navbar"
import Features from "./components/Features/Features"

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar/>
      <Hero/> 
      <About/>
      <Features/>
    </main>
  )
}

export default App