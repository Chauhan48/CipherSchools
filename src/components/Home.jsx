import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import img from '../assets/homg_img.jpg'

const Home = () =>
  (
    <Fragment>
        <Helmet><title>Quizz-App Home</title></Helmet>
        <div id='Home'>
            <section className='homepage'>
                <div>
                <img src={img} />
                </div>
                <h1>Quizz app</h1>
                <div>
                    <ul>
                        <li><Link to="/play/quiz" className='btn btn-info btn-lg'>Play</Link> </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><Link to="/login" className='btn btn-outline-primary '>Login</Link> </li>
                        <li  style={{marginLeft: "50px"}}><Link to="/signup" className='btn btn-outline-warning'>Register</Link> </li>
                    </ul>
                </div>
            </section>
        </div>
    </Fragment>
  )

export default Home
