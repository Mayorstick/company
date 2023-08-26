import React from 'react'
import './css/style.css'
import slide3 from './images/slide3.jpg'
function AboutUs() {
  return (
    <div className='container' style={{marginTop : "100px"}}>
        <div className='row'>
            <div className='col-md-6' data-aos="zoom-in">
                <img src={slide3} alt=''  className='img-fluid'/>
            </div>
            <div className='col-md-6 about-text'>
                <h1 className='text-center text-danger'>About Us</h1>
                <h5 className='text-center'>We are the Leaders in the</h5>
                <h5 className='text-center'>Technology industry</h5>
                <div className='about-paragraph'>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.</p>
                    <p>Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.</p>
                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.</p>
                    <p>Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.</p>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default AboutUs
