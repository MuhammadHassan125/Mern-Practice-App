import React,{useState} from 'react'
import Header from '../Header/Header'
import { Link, useNavigate  } from 'react-router-dom'

function Signup() {

  const navigate = useNavigate();

const [user, setUser] = useState({
  name:"", email:"", number:"", work:"", password: "", cpassword: ""
});

let name,value;

const handleInputs = (e) =>{
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({...user, [name]:value})
}

const postData = async (e) =>{
      e.preventDefault();
      const {name, email, number, work, password,cpassword} = user;

     const res = await fetch('/register',{
      method:"POST",
      header:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        name, email, number, work, password,cpassword
      })
     }) 

     const data = await res.json();
     if(data.status === 402){
      window.alert("Invalid Registration")
      console.log("Invalid Registration")
     }
     else{
      window.alert("User Registered Successfully");
      console.log("User Registered Successfully");
     }

     navigate('/signin');

}

  return (
            <>
                <Header/>
                
                <section className='section-signup w-[100%] float-left py-16'>
                  <div className='container w-[1170px] m-auto'>
                    <div className=' mt-16 shadow-md'>
                        <div className='w-full md:w-[40%] md:float-left md:pl-16 mt-10'>
                          <h1 className='text-4xl font-bold text-left overflow-hidden'>Signup</h1>
                            <div class="relative mb-4">
                              <input type="text" value={user.name} onChange={handleInputs} placeholder='Your Name' id="name" name="name" class=" block w-96 mt-3 md:w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                              <input type="text" value={user.email} onChange={handleInputs} placeholder='Your Email' id="name" name="email" class=" block w-96 mt-3 md:w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                              <input type="number" value={user.work} onChange={handleInputs} placeholder='Mobile Number' id="name" name="number" class=" block w-96 mt-3 md:w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                              <input type="text" value={user.number} onChange={handleInputs} placeholder='Your Profession' id="name" name="work" class=" block w-96 mt-3 md:w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                              <input type="password" value={user.password} onChange={handleInputs} placeholder='Password' id="name" name="password" class=" block w-96 mt-3 md:w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                              <input type="password" value={user.cpassword} onChange={handleInputs} placeholder='Confirm Password' id="name" name="cpassword" class=" block w-96 mt-3 md:w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>

                            </div>
                            <button className=' bg-blue-400 text-white px-5 py-3  cursor-pointer rounded-md' method="POST" onClick={postData}>Register</button>
                            <p className='text-blue-400 mt-10 block md:hidden'>I am Already Registered</p>

                        </div>
                        <div className='w-[100%] md:w-[50%] float-right text-center hidden md:block'>
                          <img src='./pc-pic.jpg' className='w-[40%] md:w-[100%]' alt='value'/>
                       <Link to={'/signin'}>
                         <p className='text-blue-400'>I am Already Registered</p>
                         </Link>
                        </div>

                    </div>

                  </div>
                </section>
            </>

)
}

export default Signup