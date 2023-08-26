import React from 'react'
import './css/style.css'
import { FaPython, FaElementor, } from "react-icons/fa6";
import { DiAndroid, DiGithubBadge, DiJsBadge, DiDatabase } from "react-icons/di";
function ServicesCard() {
  return (
    <div className='container mt-5 '>
        <div className='row gy-4 '>
            <h1 className='text-danger text-center '>Our Services</h1>
            <div className='col-md-4'data-aos="zoom-out-up">
                <div class="card shadow " style={{width: "18rem" , height: "200px"}}>
                    <div class="card-body text-center ">
                        <FaPython size='70px' />
                        <h5 class="card-title"> Mobile Development</h5>
                        <p class="card-text">Learn Mobile development ; more about React-native to cover</p>
                        
                    </div>
                </div>
            </div>
            <div className='col-md-4'data-aos="zoom-out-up">
                <div class="card shadow " style={{width: "18rem" , height: "200px"}}>
                    <div class="card-body text-center ">
                        <FaElementor size='70px' />
                        <h5 class="card-title"> Web Design</h5>
                        <p class="card-text">Learn web design; use tools like Html, Css, Bootsrtrap, react and all.</p>
                        
                    </div>
                </div>
            </div>
            <div className='col-md-4'data-aos="zoom-out-up">
                <div class="card shadow " style={{width: "18rem" , height: "200px"}}>
                    <div class="card-body text-center ">
                        <DiAndroid size='70px' />
                        <h5 class="card-title"> Mobile Development</h5>
                        <p class="card-text">Learn Web development Using Python; more about Django to cover</p>
                        
                    </div>
                </div>
            </div>
            <div className='col-md-4'data-aos="zoom-out-up">
                <div class="card shadow " style={{width: "18rem", height: "200px"}}>
                    <div class="card-body text-center ">
                        <DiGithubBadge size='70px' />
                        <h5 class="card-title"> Github</h5>
                        <p class="card-text">Learn Github; more about Git and Github</p>
                        
                    </div>
                </div>
            </div>
            <div className='col-md-4'data-aos="zoom-out-up">
                <div class="card shadow " style={{width: "18rem", height: "200px"}}>
                    <div class="card-body text-center ">
                        <DiJsBadge size='70px' />
                        <h5 class="card-title"> Lean JavaScritp</h5>
                        <p class="card-text">Learn Web development Using JavaScript; more about JavaScript to cover e.g Node js</p>
                        
                    </div>
                </div>
            </div>
            <div className='col-md-4'data-aos="zoom-out-up">
                <div class="card shadow " style={{width: "18rem", height: "200px"}}>
                    <div class="card-body text-center ">
                        <DiDatabase size='70px' />
                        <h5 class="card-title"> Database</h5>
                        <p class="card-text">Learn about Database Using  Django e.g MonGoDB e.t.c</p>
                        
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default ServicesCard
