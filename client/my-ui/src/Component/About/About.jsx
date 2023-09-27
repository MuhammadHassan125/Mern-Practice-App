import React, { useState, useEffect } from 'react'
import Header from '../Header/Header'
import { useNavigate } from 'react-router-dom';
function About() {


  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: 'About',
      content: 'Content for Tab 1',
    },
    {
      title: 'Timeline',
      content: ['Home', 'About']
    },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };


  const callingAboutPage = async () => {
       try {
        
        const res = await fetch('/about',{
          method: "GET",
          header:{
              Accept: 'application/json',
              "Content-Type": 'application/json',
          },

            credentials:"include"
        });

        const data = await res.json();
        console.log(data);

        if(!res.status === 200){
          const error = new Error(res.error);
          throw error;
        }
       } catch (error) {
          console.log(error)
          navigate('/signin')
       }
  }

  useEffect(() => {
    callingAboutPage();
  },)
  

  return (
    <>
      <Header />

      <section className='section-home w-[100%] float-left '>
        <div className='container'>

          <div className='main-div mt-36 bg-white shadow-xl'>
            <div className='w-[100%] md:w-[40%] md:float-left'>
              <img src='./men.jpg' className='md:w-[80%] md:ml-20' alt='img' />
            </div>

            <div className='content relative mt-3 md:w-[50%] w-[100%] md:float-left'>
              <h1 className='font-bold text-2xl'>Muhammad Hassan</h1>
              <p className='text-blue-500 text-xl'>web developer</p>
              <button className='absolute top-0 right-0 bg-gray-200 px-3 py-1 rounded-md'>Edit Profile</button>
              <p>Rankings: 1/10</p>
            </div>

            <div className='tabs w-[50%]'>
              <div className='mt-16'>
                <div className="flex space-x-4">
                  {tabs.map((tab, index) => (
                    <button
                      key={index}
                      className={`${index === activeTab ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
                        } px-4 py-2 rounded`}
                      onClick={() => handleTabClick(index)}
                    >
                      {tab.title}
                    </button>
                  ))}
                </div>
                <div className="mt-4">{tabs[activeTab].content}</div>
              </div>
            </div>



          </div>



        </div>
      </section>
    </>
  )
}

export default About