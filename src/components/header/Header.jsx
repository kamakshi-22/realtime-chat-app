import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <div class="header">
            <div class="logo">logo</div>
            <div class="nav">
                <Link to="/" class="nav-item">Home</Link>
                <Link to="/about" class="nav-item">About</Link>
                <Link to="/contact" class="nav-item">Contact</Link>
            </div>
        </div>
    )
}
