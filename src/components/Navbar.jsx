import React from 'react'

const Navbar = () => {
    return (
        <div className='navbar'>
            <span className='logo'>Front-end Dev</span>
            <ul className="list">
                <li className="listItem">
                    <img src="https://img.freepik.com/free-photo/business-finance-employment-female-successful-entrepreneurs-concept-smiling-professional-businesswoman-real-estate-broker-showing-clients-good-deal-carry-laptop-hand_1258-59121.jpg?size=626&ext=jpg&ga=GA1.1.518692104.1697388631&semt=ais" alt="woman" className="avatar" />
                </li>
                <li className="listItem">Susie</li>
                <li className="listItem">Sign out</li>
            </ul>
        </div>
    )
}

export default Navbar