import React from 'react'

const Featured = () => {
    return (
        <div className='w-[100%] max-w-[1024px] flex justify-between gap-[20px] z-0'>
            <div className="relative text-white rounded-lg overflow-hidden ">
                <img
                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/ed/95/07/limak-eurasia-luxury.jpg?w=1100&h=-1&s=1"
                    alt=""
                    className='w-[100%] object-cover h-[250px]'
                />
                <div className="absolute bottom-10 left-10">
                    <h1 className='font-bold text-2xl hover:text-4xl'>Dubin</h1>
                    <h2 className='font-semibold text-xl hover:text-2xl'>123 Properties</h2>
                </div>
            </div>
            <div className="relative text-white rounded-lg overflow-hidden">
                <img
                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/ed/95/07/limak-eurasia-luxury.jpg?w=1100&h=-1&s=1"
                    alt=""
                    className='w-[100%] object-cover h-[250px]'
                />
                <div className="absolute bottom-10 left-10">
                    <h1 className='font-bold text-2xl'>Dubin</h1>
                    <h2 className='font-semibold text-xl'>123 Properties</h2>
                </div>
            </div>
            <div className="relative text-white rounded-lg overflow-hidden">
                <img
                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/ed/95/07/limak-eurasia-luxury.jpg?w=1100&h=-1&s=1"
                    alt=""
                    className='w-[100%] object-cover h-[250px]'
                />
                <div className="absolute bottom-10 left-10">
                    <h1 className='font-bold text-2xl'>Dubin</h1>
                    <h2 className='font-semibold text-xl'>123 Properties</h2>
                </div>
            </div>
        </div>
    )
}

export default Featured