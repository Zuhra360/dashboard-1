import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./components/Dashboard"
import { Navbar } from "./components/Navbar"
import { Sidebar } from "./components/Sidebar"



function App() {
  

  return (
    <Router>
      
      <div className="flex h-screen ">
        
        <Sidebar />
        <div className="flex-grow p-4 bg-zinc-50">
        <Navbar/>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
