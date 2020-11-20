import React, { useState } from 'react'
import General from './compontents/General'
import Education from './compontents/Education'
import Practical from './compontents/Practical'
import Header from './compontents/Header'

function App() {
  const [generalMode, setgeneralMode] = useState('edit')
  const [educationMode, seteducationMode] = useState('edit')
  const [practicalMode, setpracticalMode] = useState('edit')


  
  const handleSubmitGeneral = (e) => {    
    e.preventDefault()
    setgeneralMode('display')
    }
  const handleEditGeneral = () => {
    setgeneralMode('edit')
  }

  const handleSubmitEducation = (e) => {    
    e.preventDefault()
    seteducationMode('display')
  }
  const handleEditEducation = () => {
    seteducationMode('edit')
  }

  const handleSubmitPractical = (e) => {    
    e.preventDefault()
    setpracticalMode('display')
  }
  const handleEditPractical = () => {
    setpracticalMode('edit')
  }
  
    return (
      <div id='App'>
        <Header />
        <General 
         general={generalMode}
         handleSubmit={handleSubmitGeneral}
         handleEdit={handleEditGeneral} />
        <Education 
         education={educationMode}
         handleSubmit={handleSubmitEducation}
         handleEdit={handleEditEducation}/>
        <Practical 
        practical={practicalMode}
        handleSubmit={handleSubmitPractical}
        handleEdit={handleEditPractical} />
        
      </div>
    )
}

export default App

