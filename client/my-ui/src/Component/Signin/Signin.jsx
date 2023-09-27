import React,{useState} from 'react'
import Header from '../Header/Header'
import { Link, useNavigate } from 'react-router-dom'


function Signin() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


    const userLogin = async() =>{
      
      const res = await fetch('/signin',{
        method:"POST",
        header:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
          email,
          password
        })
      })

      const data = await res.json();
      if(data === 402 || !data){
        window.alert('Invalid User');
        console.log('Invalid User');
      }
      else{
        window.alert('User Login Sucessfully')
        console.log('User Login Sucessfully');
      }

      navigate('/home');

    }

  return (
    <>
      <Header/>

       
      <section className='section-signup w-[100%] float-left py-16'>
                  <div className='container w-[1170px] m-auto'>
                    <div className=' mt-16 shadow-md'>
                        <div className='w-full md:w-[40%] md:float-right md:pl-16 md:mt-32'>
                          <h1 className='text-4xl font-bold text-left overflow-hidden md:mb-2'>Signup</h1>
                            <div class="relative mb-4">
                              <input type="text" placeholder='Your Email' value={email} onChange={(e)=>setEmail(e.target.value)} id="name" name="name" class=" block w-96 mt-3 md:w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                              <input type="text" placeholder='Your Password' value={password} onChange={(e)=>setPassword(e.target.value)}  id="name" name="email" class=" block w-96 mt-3 md:w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>

                            </div>
                            <button className=' bg-blue-400 text-white px-5 py-3  cursor-pointer rounded-md' onClick={userLogin}>Login</button>
                            <p className='text-blue-400 mt-10 block md:hidden'>I am Already Registered</p>

                        </div>
                        <div className='w-[100%] md:w-[50%] float-left text-center hidden md:block'>
                          <img src='./girl.jpg' className='w-[40%] md:w-[100%]' alt='value'/>
                       <Link to={'/signup'}>
                         <p className='text-blue-400 -mt-4' >Create an account</p>
                         </Link>
                        </div>

                    </div>

                  </div>
                </section>

    </>
  )
}

export default Signin