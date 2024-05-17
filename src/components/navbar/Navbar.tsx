import Image from 'next/image'
import React from 'react'
import Link from 'next/link';

export default function Nabar() {
  return (
    <div className='container mx-auto   grid grid-cols-3  gap-x-4 mt-6 bg-white'>

      <div>
<Link href='/'> <Image className='px-4 cursor-pointer' src={'/assets/images/1.png'} alt='image' width={200} height={50}/></Link> 
        
      </div>

      <ul className='grid grid-cols-3 gap-x-4'>

        <li className='text-lg cursor-pointer'><Link href='/'>Home</Link></li>
        <li className='text-lg cursor-pointer'>Contact</li>
        <li className='text-lg cursor-pointer'>About</li>


      </ul>

        
        
        
        
        <div className='grid justify-end'>
          <button className='w-[147px] h-[37px] bg-orange-400 text-lg text-white rounded-md cursor-pointer '><Link href='/login'>Login</Link></button>
          </div>  

    </div>
  )
}
