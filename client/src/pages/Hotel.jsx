import Navbar from '../components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import MailList from '../components/MailList';
import Footer from '../components/Footer';
import { useState } from 'react';

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)
  const photos = [

    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/503659117.jpg?k=a159f9dba512843f4c9ffdfd6ad7a42637559a8bbe083790766641ff80000179&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/502882861.jpg?k=45a29a480efa7c19b204fc02e99c78231ea31a7313a2629a38d316e924090f5d&o=&hp=1"
    },

    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/528703221.jpg?k=fc6b39586f3f8f5004a7c2ffe242fc01b1d9356e5838be08e4edbcc8293c3054&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/528703255.jpg?k=7901db38d379c91c788b97692377939bf4a6004f25866ee5d2737020b4cef9a6&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/502882925.jpg?k=decca5191ae840e36ea5a0588c0848200ee1ce08de0156adf70a33db3615fa4d&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/502882819.jpg?k=f9551887f71ff1210287ecb5d9892f4acd272ff76fcac31b2ead57df96065255&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/503659486.jpg?k=ceb83314bf549d654359a7c38fc6123d9b3482c568ef9e35b96dbd3f54878087&o=&hp=1"
    },
  ]
  const handleOpen = (index) => {
    setSlideNumber(index)
    setOpen(true)
  }
  const handleMove = (direction) => {
    let newSlideNumber;
    if (direction === 'l') {
      newSlideNumber = slideNumber === 0 ? 6 : slideNumber - 1
    }else{
      newSlideNumber = slideNumber === 6 ? 0 : slideNumber + 1
    }
    setSlideNumber(newSlideNumber)
  }

  return (
    <div>
      <Navbar />
      <div className='flex flex-col items-center py-4'>
        {open &&
          <div
            className="flex justify-center items-center sticky top-20 left-0 w-full h-full bg-black max-w-fit z-40 p-6 bg-opacity-10 rounded-lg"
          >
            <FontAwesomeIcon
              icon={faCircleXmark}
              className='absolute top-2 right-2 text-gray-500 cursor-pointer'
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className='absolute top-1/2 left-1 text-xl text-green-600 bg-white p-1 rounded-3xl'
              onClick={() => handleMove('l')}
            />
            <div>
              <img src={photos[slideNumber].src} alt="" className='rounded-lg w-full h-full' />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className='absolute top-1/2 right-1 text-xl text-green-600 bg-white p-1 rounded-3xl'
              onClick={() => handleMove('r')}
            />
          </div>}
        <div className='w-[100%] max-w-[1024px] flex flex-col gap-2 relative'>
          <button className='absolute top-2 right-0 px-10 py-2 bg-[#0071c2] font-medium text-white rounded cursor-pointer'>Reserve or Book Now</button>
          <h1 className='text-2xl font-semibold'>Grand Hotel</h1>
          <div className='text-sm flex items-center gap-3'>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elaton ......</span>
          </div>
          <span className='text-blue-400 font-medium'>Ecellent location -500m from center</span>
          <span className='text-green-400 font-medium'>Book a stay over $11114 at thi property and get a free airport taxi</span>
          <div className='flex flex-wrap justify-between'>
            {photos.map((photo, index) => (
              <div key={index} className="w-[33%]" >
                <img onClick={() => handleOpen(index)} src={photo.src} alt="" className='w-[100%]' />
              </div>
            ))}
          </div>
          <div className='flex justify-between gap-4 mt-4'>
            <div className="flex-auto w-[75%]">
              <h1 className='text-lg font-semibold'>Stay in th heart of Krakow</h1>
              <p className='text-[14px] text-justify'>
                Situated in Dubai, within 3.9 km of The Dubai Fountain and 3.9 km of Dubai Mall, The First Collection Waterfront features accommodation with a restaurant and free WiFi throughout the property as well as free private parking for guests who drive. This 4-star hotel offers a tour desk. The accommodation provides room service, a concierge service and currency exchange for guests.

                The hotel will provide guests with air-conditioned rooms offering a desk, a kettle, a safety deposit box, a flat-screen TV and a private bathroom with a shower. At The First Collection Waterfront the rooms include bed linen and towels.

                Speaking Arabic, English, French and Hindi at the 24-hour front desk, staff will be happy to provide guests with practical advice on the area.

                Burj Khalifa is 5.4 km from the accommodation, while City Walk Mall is 7.3 km from the property. The nearest airport is Dubai International Airport, 17 km from The First Collection Waterfront.

                Couples particularly like the location — they rated it 9.0 for a two-person trip.
              </p>
            </div>
            <div className='flex-auto w-[25%] h-full'>
              <div className=" bg-blue-100 flex flex-col gap-2 px-2 py-3 rounded max-h-max">
                <h1 className='text-lg font-semibold'>Perfect fo a 9-night stay!</h1>
                <span className='text-[14px] '>Located in the real heart of Lrakow, this property ha an axcellent location score of 9.8!</span>
                <h2 className='font-light text-[16px]'>
                  <b>$945</b>(9 nights)
                </h2>
                <button className='px-8 py-2 bg-[#0071c2] font-medium text-white rounded cursor-pointer'>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>

    </div>
  )
}

export default Hotel