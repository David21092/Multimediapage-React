import { Link } from 'react-router-dom'
import React from 'react'
import '../css/Navbar.css'
export default function Navbar () {
  return (
        <div>
            <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/Plans'><li>Subscriptions</li></Link>
                <Link to='/gallery'><li>Gallery</li></Link>
                <Link to='/beforeAfter'><li>Comparison</li></Link>
                <Link to='/About'><li>About</li></Link>
                <Link to='/FAQ'><li>FAQ</li></Link>
                <Link to='/Contact'><li>Kontakt</li></Link>
            </ul>
        </div>
  )
}
