import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import ContactForm from './components/Contact'
import Footer from './components/Footer'
import ProjectsPage from './components/ProjectsPage'

// Home page layout — Projects section removed, replaced by hero accordion + /projects route
function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <ContactForm />
      <Footer />
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
    </Routes>
  )
}

export default App
