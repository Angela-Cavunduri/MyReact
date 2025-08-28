import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./Pages/Home"
import Empresa from "./Pages/Empresa"
import Contacto from "./Pages/Contacto"
import Navbar from "./Components/Iayout.jsx/Navbar"
import Footer from "./Components/Iayout.jsx/Footer"

function App() {
  return (
    <Router>
     <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
           <Footer/>
    </Router>
  )
}

export default App

