import { useState, useCallback } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import ContactForm from './components/Contact'
import Footer from './components/Footer'
import ProjectsPage from './components/ProjectsPage'
import LoadingScreen from './components/LoadingScreen'

// Show loading screen only on first visit within a browser session.
// sessionStorage persists through reloads but clears when tab is closed.
const isFirstVisit = !sessionStorage.getItem('adebola_visited');

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
  const [loading, setLoading] = useState(isFirstVisit);

  const handleDone = useCallback(() => {
    sessionStorage.setItem('adebola_visited', '1');
    setLoading(false);
  }, []);

  return (
    <>
      {loading && <LoadingScreen onDone={handleDone} />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </>
  )
}

export default App
