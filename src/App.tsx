
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './screens/landing-page'
import PrivateArea from './screens/private-area'

function App() {


  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<LandingPage/>}/>
          <Route path="/private-area" element={<PrivateArea/>}/>
        
        </Routes>
      
      </BrowserRouter>
     
    </>
  )
}

export default App
