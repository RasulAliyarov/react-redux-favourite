import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
    let favourite = useSelector((store) => store.favourite.value)
    return (
        <header>
            <div className="header__wrapper container">
                <div className="header__wrapper__left">
                    <Link to="/" className='logo'>ALIYAR</Link>
                </div>
                <div className="header__wrapper__right">
                    <Link to="/">Home</Link>
                    <Link to="/costumers">Costumers</Link>
                    <Link className="fawouriteLink" to="/favourites">Favourites <span className='fw'>{favourite}</span></Link>
                </div>
            </div>
        </header>
    )
}

export default Navbar