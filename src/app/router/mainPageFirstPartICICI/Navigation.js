import React from 'react'
import { Link } from 'react-router-dom'

import '../../../assests/css/naviagtionRouter.css'

const Navigation = () => {
  return (
    <div id='mainpageiconnav' >
   
      <Link to='/' ></Link>
      <Link to='/Home' >
        <img className='mainPagebox' id='mainpagecarimage' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpsk1e-NZlBWz6IMNoxgDf7F7HSJ_cINw0rGRZOOsfh_QJAmzC" alt="carImage " />
      <p className='mainPageIconName' >Car</p>
       </Link>
      
      <Link to='/ContactUs' >
        <img className='mainPagebox' id='mainpagescooterimage' src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR8iaVDZFoFrApy-_DVJ8qc1KCyK9tQJEo0FZt7D6PILSpWuq_H" alt="carImage " />
      <p className='mainPageIconName' >Bike</p>
      </Link>
      <Link to='/AboutUs' >
        <img className='mainPagebox' id='mainpagehealthimage' src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS0MMI7Yyg0_0nWtH1gnLluK_JitUGyFduPLio5FmGUlqBOxA4a" alt="healthImage " />
      <p className='mainPageIconName' >Health</p>

      </Link>
      <Link to='/Dashboard' >
        <img className='mainPagebox' id='mainpagestravelimage' src="https://png.pngtree.com/png-vector/20190215/ourmid/pngtree-vector-airplane-icon-png-image_533290.jpg" alt="healthImage " />
      <p className='mainPageIconName' >Travel</p>

      </Link>
      <a href="https://sme.icicilombard.com/?utm_source=Organic&utm_medium=Organic&utm_campaign=Echannel+Business+Tab&utm_id=Echannel+Business+Tab">
        <img className='mainPagebox' id='mainpagesbusinessimage' src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS0UbSisa6_5w2HKtwL0HPfcL6sTMmeqdCSgAFaz98p91V2lTsp" alt="healthImage " />
      <p className='mainPageIconName' >Business</p>

      </a>
      <Link to='/other' >
        <img className='mainPagebox' id='mainpagesrenewalimage' src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQpKI08w5w4Zql0E0BKZrqr31Ib8NONB7NK01GuJVHX0TO2XdrG" alt="healthImage " />
      <p className='mainPageIconName' >Renewal</p>

      </Link>
      
    </div>
  )
}

export default Navigation
