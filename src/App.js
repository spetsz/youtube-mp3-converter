import React from "react"
import { HashRouter, Routes, Route } from "react-router-dom"
import Nav from "./components/Nav"
import Main from "./components/Main"

const App = () => {
  return (
    
    <HashRouter>
      <Nav />
      <Main />
    </HashRouter>

  )
}

export default App