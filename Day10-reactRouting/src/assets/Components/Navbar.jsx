import React from 'react'
import "../../App.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <div className='div1'>
        <h3>Bikalpa Adhikari</h3>
        <div className='div3'>
            <Link to='/Home'>Home</Link>
            <Link to='/Info'>Info</Link>
            <Link to='/Contact'>Contact</Link>
        </div>
     </div>
    </div>
  )
}

export default Navbar