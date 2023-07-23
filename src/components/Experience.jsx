import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
// import tailwind from '../assets/tailwind.png';
// import react from '../assets/react.png';
import php from '../assets/php1.png';
// import github from '../assets/github.png';
import photoshop from '../assets/photoshop.png';
import mysql from '../assets/mysql.png';
import python from '../assets/python.png';
// import ubuntu from '../assets/ubuntu.png';
// import canva from '../assets/canva.png';
// import figma from '../assets/figma.png';
import premiere from '../assets/premiere.png';

const Experience = () => {


    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 9,
            src: mysql,
            title: 'MySQL',
            style: 'shadow-orange-500',
        },
        {
            id: 6,
            src: php,
            title: 'PHP',
            style: 'shadow-violet-500'
        },
        // {
        //     id: 7,
        //     src: github,
        //     title: 'GitHub',
        //     style: 'shadow-violet-500',
        // },
        {
            id: 8,
            src: photoshop,
            title: 'Adobe Photoshop',
            style: 'shadow-blue-500',
        },
        {
            id: 14,
            src: premiere,
            title: 'Adobe Premiere Pro',
            style: 'shadow-blue-700',
        },
        // {
        //     id: 4,
        //     src: tailwind,
        //     title: 'Tailwind',
        //     style: 'shadow-blue-500'
        // },
        {
            id: 10,
            src: python,
            title: 'Python',
            style: 'shadow-yellow-500',
        },
        // {
        //     id: 5,
        //     src: react,
        //     title: 'React',
        //     style: 'shadow-blue-400'
        // },
        // {
        //     id: 12,
        //     src: canva,
        //     title: 'Canva',
        //     style: 'shadow-violet-400',
        // },
        // {
        //     id: 13,
        //     src: figma,
        //     title: 'Figma',
        //     style: 'shadow-orange-300',
        // },
        // {
        //     id: 11,
        //     src: ubuntu,
        //     title: 'Ubuntu',
        //     style: 'shadow-orange-500',
        // },
        
    ]


  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className='py-6'>Technologies I Use</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                {
                    techs.map(({id, src, title, style}) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt="" className='w-20 mx-auto' />
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))
                }

                
            </div>
        </div>
    </div>
  )
}

export default Experience