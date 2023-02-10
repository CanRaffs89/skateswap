import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import menuIcon from '../assets/img/menu_icon.svg'
import arrowIcon from '../assets/img/arrow_icon.svg'

function navbar() {
  const [menu, setMenu] = useState(false)
  const showMenu = () => setMenu(!menu)

  return (
    <>
      <input type="checkbox" id="nav" className="hidden" />
      <label htmlFor="nav" className="nav-mobile-toggle" onClick={showMenu}>
        <img id='menu-icon-img' src={menuIcon} alt="" />
      </label>
      <nav>
          <h1 id="nav-logo"><Link to="/"><span>skate</span>swap</Link></h1>
          <div className={menu ? "nav-container active" : "nav-container"} id="nav-mobile">
            <Link to="/" className='nav-link'>
              <h2 className='nav-link-text'>Login</h2>
              <img className='nav-link-arrow' src={arrowIcon} alt="" />
            </Link>
            <Link to="/" className='nav-link'>
              <h2 className='nav-link-text'>Account</h2>
              <img className='nav-link-arrow' src={arrowIcon} alt="" />
            </Link>
            <Link to="/" className='nav-link'>
              <h2 className='nav-link-text'>About</h2>
              <img className='nav-link-arrow' src={arrowIcon} alt="" />
            </Link>
          </div>
      </nav>
    </>
  )
}

export default navbar