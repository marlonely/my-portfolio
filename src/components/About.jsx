import React from 'react'

const About = () => {
  return (
    <div 
    name='about' 
    className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>

            <p className='text-xl mt-20'>
              Welcome to my portfolio! I'm a passionate web developer with a focus on backend development and database management. My journey includes experiences as a technology intern at Cloudwalk Digital Inc., where I handled API testing and technical support. In our capstone project, I developed backend structures and integrated APIs like OpenCage, Maps, and Google, along with implementing the Naive Bayes Algorithm for machine learning. I love crafting impactful websites that combine creativity and functionality. Let's explore my projects and skills together as I continue to learn and innovate in the dynamic world of web development!
            </p>

            {/* <br />

            <p className='text-xl'>
              I love building websites, especially on the backend development side, but I can also do frontend work. I am primarily focused on developing the backend structure of a website and managing databases.
            </p>

            <br />

            <p className='text-xl'>
              I have experience as a technology intern at Cloudwalk Digital Inc., where most of my tasks involve providing technical support, creating new tenant accounts, and testing the company's APIs using pytest and schemathesis.
            </p>

            <br />

            <p className='text-xl'>
              In our capstone project, I am assigned as a backend developer. My task is to develop most of the backend structure of our website, implementing APIs like OpenCage API, Maps API, and Google API. Additionally, I am responsible for the machine learning language that we implement in our system using Naive Bayes Algorithm.
            </p> */}
        </div>
    </div>
  )
}

export default About