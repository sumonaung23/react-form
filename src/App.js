import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import './App.css';
import Post from './pages/Post';
import Login from './pages/Login';
import { BrowserRouter,Routes, Route, Navigate } from 'react-router-dom';

const App = () => {
    const user = true;

    return (
        <BrowserRouter>
            <div className='app'>
                <Navbar user={user} />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={user ? <Navigate to="/" /> : <Login />} />
                    <Route path='/post/:id' element={user ? <Post /> : <Navigate to="/login" />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
        
}

export default App