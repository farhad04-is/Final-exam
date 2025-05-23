import React, { useContext } from 'react'
import { WhislistContext } from '../Context/WhislistProvider'
import  { BasketContext } from '../Context/BasketProvider'
import { SlBasket } from "react-icons/sl";
import { FaHeart } from "react-icons/fa6"
import { Link } from 'react-router-dom'
import '../ALLCSSFile/Header.css'
function Header() {
  const {whislist}=useContext(WhislistContext)
  const{basket}=useContext(BasketContext)
  return (
<>


<div className='Navbar_headerr'>
  <div className='AllFAv'>
    Flora Studio
  </div>
<div className='AllLinks'>

<Link to="/admin">Admin</Link>
<Link to="#">About as</Link>
<Link to="#">Contact</Link>
  <Link  to="/addadmin">ADD</Link>
  <Link  to="/update">Update</Link> 
  <Link to="/whislist"> <div><FaHeart />{whislist.length}</div></Link>
  <Link to="/basket">  <div><SlBasket />:{basket.length}</div></Link>

  <Link to="/"></Link>
</div>
</div>
</>
  )
}

export default Header
