import './App.css'
import { NavBar } from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Home } from './pages/Home';
import { Subscribe } from './pages/Subscribe';

function App() {

  return (
    <>
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path="/socios" Component={Home} />
            <Route path="/cadastro" Component={Subscribe} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
