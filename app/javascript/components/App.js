import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Header from "./components/Header"
const App = (props) => {
  
    return (
      <BrowserRouter>
      <Header  {...props}/>
      <Routes>
      <Route exact path="/" element={<Home {...props} />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    );
  
}

export default App