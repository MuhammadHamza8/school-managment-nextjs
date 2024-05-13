import React from 'react'

export default function LoginPage() {
  return (
    <div className='container mx-auto'>
        <div className='border-2 w-[700px] mx-auto mt-[200px]'>
        <div className='grid justify-items-center bg-black border-2 solid  w-[700px] py-5  mx-auto'>
            <h1 className='text-5xl text-white font-bold'>EDUTERIA</h1>
            </div>
            <h1 className='text-center py-2 text-3xl font-bold border-b-2 w-[600px] mx-auto '>ADMIN</h1>

            <div className='grid grid-cols-1'>

           

            <div className='pt-[150px] border-b-2 w-[600px] mx-auto '> <input className=''  type='email'  placeholder='Username' /></div>

            <div className='pt-[150px] border-b-2 w-[600px] mx-auto'><input className='' type='password' placeholder='Password'/></div>

            <button className=' w-[147px] h-[47px] bg-yellow-600 cursor-pointer text-center text-2xl text-white mx-auto '>Login</button>
            
            </div>



        </div>

                                             
    
    </div>
  )
}
