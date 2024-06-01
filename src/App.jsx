import { Outlet } from 'react-router-dom'
import './App.css'
import { AnimatePresence } from 'framer-motion'
import Choice from './components/Choice/Choice.jsx'

function App() {
  return (
    <>
      <AnimatePresence>
          <Outlet />
      </AnimatePresence>
    </>
  )
}

export default App
