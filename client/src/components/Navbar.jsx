import React from 'react'

const Navbar = () => {
    return (
        <div className='h-[50px] bg-blue-500 flex justify-center border-b border-white'>
            <div className="w-[100%] max-w-[1024px] text-white flex justify-between items-center">
                <span className='font-semibold'>Logo</span>
                <div className="">
                    <button className='ml-[20px] border-none py-[5px] px-[10px] curser-pointer'>Register</button>
                    <button className='ml-[20px] border-none py-[5px] px-[10px] curser-pointer'>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar