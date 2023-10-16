import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({user}) => {
    return (
        <div className='navbar'>
            <span className='logo'><Link className='link' to='/'>Front-end Dev</Link></span>
            {
                user ? (
                    <ul className="list">
                <li className="listItem">
                    <img src="https://img.freepik.com/free-photo/business-finance-employment-female-successful-entrepreneurs-concept-smiling-professional-businesswoman-real-estate-broker-showing-clients-good-deal-carry-laptop-hand_1258-59121.jpg?size=626&ext=jpg&ga=GA1.1.518692104.1697388631&semt=ais" alt="woman" className="avatar" />
                </li>
                <li className="listItem">Susie</li>
                <li className="listItem">Sign out</li>
            </ul>
                ) : (<Link to='login' className='link'>Login</Link>)
            }
            
        </div>
    )
}

export default Navbar