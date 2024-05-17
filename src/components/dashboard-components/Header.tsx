import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <div className=' grid grid-cols-12 gap-x-16  '>

      <div className='col-span-4 bg-yellow-300 ' >

        <h1 className='text-white font-bold text-center bg-yellow-500 text-4xl py-9'>EDUTERIA</h1>

        <Image className='mx-auto' src='/assets/images/5.png' alt='' width={300 } height={300}/>

        <h2 className='text-center font-bold text-2xl py-2'>ADMIN</h2>

      </div>

      <div className='col-span-8 mt-8'>

        <input className='bg-gray-200 rounded px-6 py-2' type="text" placeholder='search' />


    

      </div>

     

      
      </div>
  )
}
             