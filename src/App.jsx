
import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Destination from './pages/Destination'
import Crew from './pages/Crew'
import Technology from './pages/Technology'

function App() {

  return (
   <div>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Destination' element={<Destination/>}/>
      <Route path='/Crew' element={<Crew/>} />
      <Route path='/Technology' element={<Technology/>}/>

    </Routes>
   </div>
  )
}

export default App
