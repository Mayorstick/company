import React from 'react'
import './css/style.css'
import { Link } from 'react-router-dom'
import { FaGlobe, FaPhone} from "react-icons/fa6";
import { AiOutlineMail, AiFillFacebook, AiFillTwitterCircle, AiFillYoutube, AiOutlineWhatsApp} from "react-icons/ai";
function Footer() {
  return (
    <div className='container-fluid footer mt-5 '>
        <div className='row'>
            <div className='col-md-3'>
                <h5 className='text-white  pt-4  '>Our Offices</h5>
                <ul className='list'>
                    <li><Link to='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3425191608353!2d3.2634306733290503!3d6.604289122222644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b915193d61597%3A0xfcc9da35bc4a8fe9!2sP%26T%20Residential%20Estate!5e0!3m2!1sen!2sng!4v1690937301266!5m2!1sen!2sng'
                    className='text-white text-decoration-none  offices'><FaGlobe style={{marginRight:"10px"}} />P & T Resident Estate Lagos State</Link></li>
                </ul>
                <ul className='list'>
                    <li><Link to=''
                    className='text-white text-decoration-none  offices'><FaPhone style={{marginRight:"10px"}} />+2348134386207, +2348031111516</Link></li>
                </ul>
                <ul className='list'>
                    <li><Link to=''
                    className='text-white text-decoration-none  offices'><AiOutlineMail style={{marginRight:"10px"}} />amolusegunelijah838@gmail.com</Link></li>
                </ul>
                <div className='social  '>
                    <AiFillFacebook style={{color: "white", marginRight:"10px"}} size={25} />
                    <AiFillTwitterCircle style={{color: "white", marginRight:"10px"}} size={25} />
                    <AiFillYoutube style={{color: "white", marginRight:"10px"}} size={25} />
                    <AiOutlineWhatsApp style={{color: "white", marginRight:"10px"}} size={25} />
                </div>
            </div>
            <div className='col-md-3'>
                <h5 className='text-white pt-4  '>Ouick Links</h5>
                <ul className='list'>
                    <li><Link to='/about' className='text-white text-decoration-none'> About</Link></li>
                    <li><Link to='/contact' className='text-white text-decoration-none'> Contact</Link></li>
                    <li><Link to='/services' className='text-white text-decoration-none'> Services</Link></li>
                    <li><Link to='/login' className='text-white text-decoration-none'> Login</Link></li>
                    <li><Link to='' className='text-white text-decoration-none'> Term and Condition</Link></li>
                    
                </ul>
                
               
                
            </div>
            <div className='col-md-3'>
                <h5 className='text-white pt-4  '>Bussiness Hour</h5>
                <ul>
                   <h6 className='text-white'>Monday-Friday</h6>
                   <h6 className='text-white'>09:00am-07:00pm</h6>
                    
                </ul>
                <ul>
                   <h6 className='text-white'>Saturday</h6>
                   <h6 className='text-white'>09:00am-12:00pm</h6>
                    
                </ul>
                <ul>
                   <h6 className='text-white'>Sunday</h6>
                   <h6 className='text-white'>Closed</h6>
                    
                </ul>
                
               
                
            </div>
            <div className='col-md-3'>
                <h5 className='text-white pt-4  '>NewsLetter</h5>
                <ul>
                   <h6 className='text-white news'>you can well as subbrcribe to our newsletter</h6>
                </ul>
                <form>
                    <div class="mb-3">
  
                        <input type="email" class="form-control" placeholder="enter your email" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        
                    </div>
                    <button className='btn btn-primary' type='submit'>Subscribe</button>
                </form>
                
               
                
            </div>
        </div>
        <div className='row'>
            <div className='col bg-dark '>
                <h6 className='text-white text-center pt-3'>Copywright &copy: @eminentMayor. All right reserved</h6>
                <h6 className='text-white text-center '>Designed by eminentMayor</h6>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
