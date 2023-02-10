import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import '../assets/scss/main.scss'

function App() {
    return (
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>
    )
}

export default App