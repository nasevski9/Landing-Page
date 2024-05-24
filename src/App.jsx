import Footer from './components/Footer/Footer.jsx'
import NavBar from './components/Navbar/Navbar.jsx'
import { Outlet } from 'react-router-dom'
import './App.css'
import { AnimatePresence } from 'framer-motion'

function App() {
  return (
    <>
      <AnimatePresence>
        <NavBar />
          <Outlet />
        <Footer />
      </AnimatePresence>
    </>
  )
}

export default App
