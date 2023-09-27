import React from 'react'
import Header from '../Header/Header'

function Home() {
  return (
      <>
      <Header/>
      <section className='section-home w-full text-center'>
            <div className='flex w-full relative text-center'>
              <div className='bg-blue-200 w-[50%] h-[92vh]'></div>
              <div className='bg-gray-200 w-[50%] h-[92vh]'></div>
              <h1 className='absolute top-[50%] left-[0%] md:left-[35%] font-extrabold text-6xl overflow-hidden'>I am Mern Developer</h1>
            </div>
      </section>
      </>
    )
}

export default Home   