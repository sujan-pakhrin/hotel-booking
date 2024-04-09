import React from 'react'

const MailList = () => {
    return (
        <div className='w-[100%] mt-[50px] bg-blue-500 flex flex-col items-center gap-[20px] p-[50px]'>
            <h1 className='text-3xl font-semibold '>Save Time Save Money</h1>
            <span className='font-light text-lg'>Sign up and we'll send the best deals to you!! </span>
            <div className="">
                <input type="text" placeholder='Your Email'  className='w-[300px] p-2 border-none outline-none mr-[10px] rounded-sm'/>
                <button className='bg-[#003580]  text-white py-2 px-3'>Subscribe</button>
            </div>
        </div>
    )
}

export default MailList
