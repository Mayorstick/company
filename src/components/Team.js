import React from 'react'
import './css/style.css'
// import { Link } from 'react-router-dom'
function Team() {
  return (
    <div className='container-fluid  ' style={{marginTop:'100px'}}>
        <div className='row'>
            <h1 className='text-center text-danger team-text pb-5 '>Our Team</h1>
            <div className='col-md-3'  data-aos="zoom-in" >
                <div class="card" style={{width: "18rem"}}>
                    <img src="https://cdn.pixabay.com/photo/2017/02/16/12/12/business-woman-2071342_1280.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-center text-dark ">Motunrayo Peace</h5>
                        <p class="card-text text-center ">CEO</p>
                       
                    </div>
                </div>
            </div>
            <div className='col-md-3'  data-aos="zoom-in">
                <div class="card" style={{width: "18rem"}}>
                    <img src="https://cdn.pixabay.com/photo/2018/02/13/06/53/personal-3149976_1280.jpg" class="card-img-top" alt="..." />
                    <div class="card-body text-center">
                        <h5 class="card-title text-dark">Mubar Dauda</h5>
                        <p class="card-text">General Manager</p>
                       
                    </div>
                </div>
            </div>
            <div className='col-md-3' data-aos="zoom-in">
                <div class="card" style={{width: "18rem"}}>
                    <img src="https://cdn.pixabay.com/photo/2017/08/25/21/44/excited-2681489_1280.jpg" class="card-img-top" alt="..." />
                    <div class="card-body text-center">
                        <h5 class="card-title text-dark">Tolani Base</h5>
                        <p class="card-text">Instructor</p>
                        
                    </div>
                </div>
            </div>
            <div className='col-md-3'  data-aos="zoom-in">
                <div class="card" style={{width: "18rem"}}>
                    <img src="https://cdn.pixabay.com/photo/2017/09/21/19/06/woman-2773007_1280.jpg" class="card-img-top" alt="..." />
                    <div class="card-body text-center">
                        <h5 class="card-title text-dark ">Temitayor Temitope</h5>
                        <p class="card-text">Instructor</p>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team
