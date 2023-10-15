import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import './App.css';

const App = () => {
    return (
        <div className='app'>
            <Navbar />
            <Home />
        </div>
    )
}

export default App