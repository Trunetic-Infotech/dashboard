import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ShopifyDashboard from './Pages/ShopifyDashboard'
import Electronics from './Components/Electronics'
import Books from './Components/Books'
import OrderDetails from './Components/OrderDetails'
import Profile from './Components/Profile'
import AddProduct from './Components/AddProduct'
import { LogIn } from 'lucide-react'
import Login from './Components/Login'
import SignIn from './Components/SignIn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={< Login/>} />
          <Route path="/signin" element={<SignIn />} />
          <Route path='/shopifydashboard' element={< ShopifyDashboard/>} />
       


          
        </Routes>
        
        
        </BrowserRouter>
        
      </div>
    </>
  )
}

export default App
