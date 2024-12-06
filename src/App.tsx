import React from "react"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Navbar from "./components/Navbar/Navbar"

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar/>
      <Hero/> 
      <About/>
    </main>
  )
}

export default App