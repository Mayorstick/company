import React from 'react'
import './css/style.css'
import { AiFillPhone, AiOutlineMail, AiOutlineGlobal } from "react-icons/ai";
function ContactCard() {
  return (
    <div className='container mt-5 mx-5'>
        <div className='row gy-4 '>
            <h1 className='text-danger text-center '>Contact Us</h1>
            <div className='col-md-4' data-aos="flip-up">
                <div class="card shadow " style={{width: "18rem" , height: "200px"}}>
                    <div class="card-body text-center ">
                        <AiFillPhone size='70px' />
                        <h5 class="card-title"> Phone Number</h5>
                        <p class="card-text">+2348134386207</p>
                        
                        <button className='btn btn-primary'>Call Us</button>
                    </div>
                </div>
            </div>
            <div className='col-md-4 ' data-aos="flip-up">
                <div class="card shadow " style={{width: "18rem" , height: "200px"}}>
                    <div class="card-body text-center ">
                        <AiOutlineMail size='70px' />
                        <h5 class="card-title">Email Address</h5>
                        <p class="card-text">amolusegunlijah838@gmail.com</p>
                        <button className='btn btn-primary'>Email us</button>
                        
                    </div>
                </div>
            </div>
            <div className='col-md-4' data-aos="flip-up">
                <div class="card shadow " style={{width: "18rem" , height: "200px"}}>
                    <div class="card-body text-center ">
                        <AiOutlineGlobal size='70px' />
                        <h5 class="card-title">Office Adress</h5>
                        <p class="card-text">P and T estate Road B6 ipaja Lagos. </p>
                        <button className='btn btn-primary'>Visit Us</button>
                        
                    </div>
                </div>
            </div>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3425191608353!2d3.2634306733290503!3d6.604289122222644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b915193d61597%3A0xfcc9da35bc4a8fe9!2sP%26T%20Residential%20Estate!5e0!3m2!1sen!2sng!4v1690937301266!5m2!1sen!2sng"
                style={{

                    width:"1100px",
                    height:"450px",
                }}
                ></iframe>
            </div>
        </div>
        
      
    </div>
  )
}

export default ContactCard;

