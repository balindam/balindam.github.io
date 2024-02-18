import React from 'react'
import HomePage from './components/Home/HomePage'
import { ThemeProvider } from 'context/ThemeContext'

function App() {
  console.log('re');
  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  )
}

export default App