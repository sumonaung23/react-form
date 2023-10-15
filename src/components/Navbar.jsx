import React from 'react'

const Navbar = () => {
    return (
        <div className='navbar'>
            <span className='logo'>Epiphany</span>
            <ul className="list">
                <li className="listItem">
                    <img src="https://source.unsplash.com/random/?flowers" alt="" className="avatar" />
                </li>
                <li className="listItem">Susie</li>
                <li className="listItem">Sign out</li>
            </ul>
        </div>
    )
}

export default Navbar