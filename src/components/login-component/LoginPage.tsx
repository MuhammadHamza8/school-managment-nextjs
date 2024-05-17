import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function LoginPage() {
  return (
    <div className='container mx-auto'>
        <div className='border-2 w-[700px] mx-auto mt-[100px]'>
        <div className='grid justify-items-center bg-black border-2 solid  w-[700px] py-5  mx-auto'>
            <h1 className='text-5xl text-white font-bold'>EDUTERIA</h1>
            </div>
            <h1 className='text-center py-2 text-3xl font-bold border-b-2 w-[600px] mx-auto '>ADMIN</h1>

            <div className='grid grid-cols-1'>

           

            <div className='pt-[150px] border-b-2 w-[600px] mx-auto '>
            <Image  className='ml-[550px] '  src={'/assets/images/4.png'}  alt='icon' width={30} height={30} />
               <input className='w-[500px] py-2'  type='email'  placeholder='Username' />
            </div>

            <div className='pt-[150px] border-b-2 w-[600px] mx-auto'>
            <Image  className='ml-[550px]'  src={'/assets/images/3.png'}  alt='icon' width={30} height={30} />

              <input className='w-[500px] py-2' type='password' placeholder='Password'/>
            
            </div>
            <span className='grid justify-end px-4 mt-2'><Link href='/forget-password'>Forgotten password?</Link></span>

            <div className='mx-auto py-10 mt-6'>
            <button className=' w-[467px] h-[75px] bg-yellow-400 cursor-pointer text-center text-2xl text-white mx-auto '>Login</button>
            </div>
            </div>



        </div>

                                             
    
    </div>
  )
}
