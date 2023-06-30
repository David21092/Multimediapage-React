import { Link } from 'react-router-dom'
import React from 'react'
import '../css/Navbar.css'
export default function Navbar () {
  return (
        <div className='navbardiv'>
            <ul className='navbarul'>
                <Link to='/'><li className='navbarli'>Home</li></Link>
                <Link to='/Plans'><li className='navbarli'>Subscriptions</li></Link>
                <Link to='/gallery'><li className='navbarli'>Gallery</li></Link>
                <Link to='/comparison'><li className='navbarli'>Comparison</li></Link>
                <Link to='/About'><li className='navbarli'>About</li></Link>
                <Link to='/imressum'><li className='navbarli'>Impressum</li></Link>
                <Link to='/contact'><li className='navbarli'>Kontakt</li></Link>

            </ul>
        </div>
  )
}
