import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Services from './components/Services'
import ContactForm from './components/Contact'
import StackingScrollCards from './components/CardStack'
import ScrollRevealCards from './components/CardStack'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Hero/>
      <Services/>
      <Projects/>
      <ContactForm/>
    </>
  )
}

export default App
