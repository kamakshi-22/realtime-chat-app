import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <div class="header">
            <Link to="/" class="header__logo">chat app</Link>
        </div>
    )
}
