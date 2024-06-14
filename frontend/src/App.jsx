import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Landing from './pages/Landing'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/signin' element={<Signin />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='*' element={<h1>404 not found</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
