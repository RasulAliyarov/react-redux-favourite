import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
    return (
        <header>
            <div className="header__wrapper container">
                <div className="header__wrapper__left">
                    <Link className='logo'>ALIYAR</Link>
                </div>
                <div className="header__wrapper__right">
                    <Link to="/">Home</Link>
                    <Link to="/costumers">Costumers</Link>
                    <Link to="/favourites">Favourites</Link>
                </div>
            </div>
        </header>
    )
}

export default Navbar