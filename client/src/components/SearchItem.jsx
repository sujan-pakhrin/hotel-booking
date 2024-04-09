import React from 'react'

const SearchItem = () => {
    return (
        <div className='shadow-md shadow-slate-300 p-2 rounded-lg flex justify-between gap-3 mb-4 hover:shadow-lg hover:shadow-blue-300 hover:border-none'>
            <div>
                <img
                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/ed/95/07/limak-eurasia-luxury.jpg?w=1100&h=-1&s=1"
                    alt=""
                    className='w-[200px] h-[100%] object-cover'
                />
            </div>

            <div className="flex flex-col flex-2 gap-[1px]">
                <h1 className='text-xl text-[#003580] font-semibold'>Tower Street Apartments</h1>
                <span className='text-sm'>500k from center</span>
                <span className='text-sm bg-[#008009] text-white max-w-fit px-2 rounded'>Free airport taxi</span>
                <span className='text-sm font-semibold'>Studio Apartment with Air conditioning</span>
                <span className='text-sm'>Entire studio 1 bathroom 21m 1 full bed</span>
                <span className='text-sm text-[#008009] font-semibold'>free cancellation</span>
                <span className='text-sm text-[#008009]'>You can cancel later, so lock in this great price today!</span>
            </div>
            <div className='flex-1 flex flex-col justify-between'>
                <div className="flex justify-between  items-center">
                    <span className='font-semibold'>Excellent</span>
                    <button className='font-semibold bg-[#003580] text-white p-1 border-none'>8.9</button>
                </div>
                <div className=" flex text-right flex-col">
                    <span className='text-xl'>$123</span>
                    <span className='text-xs mb-1'>Include taxes and fees</span>
                    <button className='bg-[#003580] text-white font-semibold py-1 px-2 border-0 rounded-md text-sm'>See availability</button>
                </div>
            </div>
        </div>
    )
}

export default SearchItem
