import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faVideo } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <>
    <div className="row w-100 mt-3 bg-dark text-white">
       
       <div className="col-md-4 p-4 ms-md-5">
           <h4 className='text-white' ><FontAwesomeIcon icon={faCartShopping} className='me-3' />E-Cart</h4>
           <p style={{textAlign:'justify'}} className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam commodi eum esse inventore provident nesciunt, dolores, architecto qui, praesentium voluptate cumque necessitatibus odio libero veritatis repellat dolore quasi illo dolorum?</p>
           
       </div>
       <div className="col-md-2 d-md-flex justify-content-center p-4 ">
           <div >
           <h4 className='text-white'>Links</h4>
           <p  ><Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home Page</Link></p>
           <p><Link to={'/wishlist'}  style={{textDecoration:'none',color:'white'}}>Wishlist</Link></p>
           <p> <Link to={'/cart'}  style={{textDecoration:'none',color:'white'}}>Cart</Link></p>
           </div>
       
       </div>
       <div className="col-md-2 p-4">
           <h4 className='text-white'>Guides</h4>
            <p>React</p>
            <p>React Bootstrap</p>
            <p>Bootswatch</p>
       </div>
       <div className="col-md-3 p-4">
           <h4 className='text-white'>Contact Us</h4>
           <div className='d-flex mt-4'>
           <input type="text" className='form-control' placeholder='Email ID' />
           <button className='btn btn-warning ms-3'>Subscribe</button>
           </div>
           <div className="d-flex mt-4 justify-content-between">
           <FontAwesomeIcon className='' icon={faInstagram} size='2xl' />
           <FontAwesomeIcon icon={faFacebook} size='2xl' />
           <FontAwesomeIcon icon={faTwitter} size='2xl'/>
           <FontAwesomeIcon icon={faLinkedin} size='2xl'/>
           </div>
       </div>
       <div className="col-md-1"></div>
       <div className='d-flex justify-content-center align-items-center'>
    <p>Copyright © 2023 E-Cart. Build with React.</p>
   </div>
   </div>
   
    </>
  )
}

export default Footer