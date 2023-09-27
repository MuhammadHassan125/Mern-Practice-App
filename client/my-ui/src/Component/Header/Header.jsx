import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <header className='w-[100%] block py-4 shadow-xl'>
          <div className='container m-auto  text-center md:flex md:justify-between'>
            <div >
              <Link className='font-bold text-2xl'> Hassan</Link>
            </div>

            <div className='flex w-[80%] m-auto justify-between md:justify-end'>
              <Link className="md:pr-10 lg:pr-16" to={'/home'}>Home</Link>
              <Link className="md:pr-10 lg:pr-16" to={'/about'}>About</Link>
              <Link className="md:pr-10 lg:pr-16" to={'/contact'}>Contact</Link>
              <Link className="md:pr-10 lg:pr-16" to={'/signin'}>Login</Link>
              <Link className="md:pr-10 lg:pr-16" to={'/signup'}>Register</Link>
            </div>
          </div>
      </header>
    </>
  );
}