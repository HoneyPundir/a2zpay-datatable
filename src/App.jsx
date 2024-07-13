import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import User from './Components/User'
import FundTypes from './Components/FundTypes'
import Services from './Components/Services'
import Status from './Components/Status'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes> 
          <Route path='/' element={<User/>} />
          <Route path='/fundtypes' element={<FundTypes/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/status' element={<Status/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
