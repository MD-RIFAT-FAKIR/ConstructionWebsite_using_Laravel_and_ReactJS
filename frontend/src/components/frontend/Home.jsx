import React from 'react'
import aboutImage from '../../assets/images/about-us.jpg'
import Header from './common/Header'
import Footer from './common/Footer'

const Home = () => {
  return (
    <>
      <Header/>

      <main>
        <div className='container-1'>
          <div className='hero d-flex align-items-center'>
            <div className='container-fluid'>
              <div className='text-center'>
                  <span>Welcome Amazing Constructions</span>
                  <h1>Crafting dreams with <br /> precision and excellence.</h1>
                  <p className='mb-3'>We excel at transforming visions into reality through outstanding craftsmanship and precise <br />
    attention to detail. With years of experience and a dedication to quality.</p>
                  <buttton href="" className='btn1'>Contact</buttton>
                  <buttton href="" className='btn2'>view project</buttton>
              </div>
            </div>
          </div>
        </div>

      {/* about us section */}

      <div className='section-2 py-5'>
        <div className='container py-5'>
          <div className='row'>
            <div className='col-md-6'>
                <img src={aboutImage} className='w-100' />
            </div>
            <div className='col-md-6'>
            <span>about us</span>
            <h2>Crafting structures that last a lifetime</h2>
            <p>Building enduring structures requires a comprehensive approach that combines advanced materials, resilient design, routine maintenance, and sustainable practices. By drawing on historical insights and utilizing modern technology.</p>
            <p>Designing structures that stand the test of time involves a seamless blend of cutting-edge materials, durable design, ongoing upkeep, and eco-friendly practices. By combining lessons from the past with the power of modern technology.</p>
            </div>
          </div>
        </div>
      </div>
      </main>

    <Footer/>
    </>
  )
}

export default Home