import React from 'react'
import Header from '../Header/Header'
import {RiAccountCircleFill} from 'react-icons/ri'
import {AiFillMail} from 'react-icons/ai'

function Signup() {
  return (
            <>
                <Header/>
                <section className='section'>
                    <div className='container'>

                        <div className='form-group left-side'>
                            <h1>Signup</h1>
                            <label for="exampleInputEmail1" className='icons'><RiAccountCircleFill/></label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Name"/>         

                                <label for="exampleInputEmail1" className='icons'><AiFillMail/></label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email"/>         
                            
                        </div>


                    </div>
                </section>
            </>

)
}

export default Signup