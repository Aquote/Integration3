import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accueil from './components/screens/accueil'
import Navbar from './components/common/header'
import DocumentationPage from './components/screens/documentation'
import TelechargementPage from './components/screens/telechargement'
import ContactPage from './components/screens/contact'

function App() {
  const appStyle = {
    backgroundColor: '#EFEFEF' // Remplacez 'gray' par la couleur de fond souhaitée
  };

  return (
    <div style={appStyle}>
      <Navbar />
      <Accueil />
      <DocumentationPage />
      <TelechargementPage />
      <ContactPage />
    </div>
  )

}

export default App
