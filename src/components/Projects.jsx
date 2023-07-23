import React from 'react'
import sights from '../assets/portfolio/sights.png'
import isagip from '../assets/portfolio/isagip.png'
// import navbar from '../assets/portfolio/navbar.jpg'
// import reactParallax from '../assets/portfolio/reactParallax.jpg'
// import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
// import reactWeather from '../assets/portfolio/reactWeather.jpg'

const Projects = () => {

    const projects = [
        {
            id: 1,
            src: sights,
            href: 'https://www.sightsandsites.net/',
        },
        {
            id: 2,
            src: isagip,
            href: 'https://www.isagip-qc.site/',
        },

        // {
        //     id: 3,
        //     src: navbar
        // },

        // {
        //     id: 4,
        //     src: reactParallax
        // },

        // {
        //     id: 5,
        //     src: reactSmooth
        // },

        // {
        //     id: 6,
        //     src: reactWeather
        // },


    ]

  return (
    <div name='projects' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>

        <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    Projects
                </p>
                <p className='py-6'>
                    Check out some of my work right here
                </p>
            </div>


            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {
                    projects.map(({id, src, href}) => (
                        <div key={id} className='shadowd-md shadow-gray-600 rounded-lg'>
                            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                            <div className='flex items-center justify-center'>
                                <a href={href} target='_blank' rel='noopener noreferrer' className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                                    Demo
                                </a>
                                {/* <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button> */}
                        </div>
                </div>
                    ))
                }
                
            </div>
        </div>
    </div>
  )
}

export default Projects