import { useState } from 'react'
import Navbar from '../components/Navbar'
import { useLocation } from 'react-router-dom'
import { format } from "date-fns"
import { DateRange } from 'react-date-range'
import SearchItem from '../components/SearchItem'

const List = () => {
  const location = useLocation()
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [openDate, setOpenDate] = useState(false)
  console.log(date)
  const [options, setOptions] = useState(location.state.options)
  return (
    <div>
      <Navbar />
      {/* <Header type='list' /> */}
      <div className="flex justify-center mt-4">
        <div className="flex w-[100%] max-w-[1024px] gap-4">
          <div className="flex-1 h-[500px] bg-slate-200 p-4 rounded-lg sticky top-3">
            <h1 className='text-xl text-slate-500'>Search</h1>
            <div className="flex flex-col gap-1 p-2">
              <label className='text-sm'>Destination</label>
              <input placeholder={destination} type="text" className='h-9 border-none outline-none rounded pl-2 text-sm' />
            </div>
            <div className="flex flex-col gap-1 relative p-2">
              <label className='text-sm'> Check in Date  </label>
              <span
                onClick={() => setOpenDate(!openDate)}
                className='h-9 p-3 bg-white flex items-center cursor-pointer rounded text-xs'
              >
                {`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}
              </span>
              {openDate && <DateRange
                onChange={(item) => setDate([item.selection])}
                minDate={new Date()}
                ranges={date}
                className='absolute top-20'
              />}
            </div>
            <div className="flex flex-col">
              <label>Options</label>
              <div className='p-3'>
                <div className="flex justify-between mb-3 text-sm">
                  <span>Min price per night</span>
                  <input className='w-10 outline-none px-1 py-1 rounded text-sm' type="number" />
                </div>
                <div className="flex justify-between mb-3 text-sm">
                  <span>Max price per night</span>
                  <input className='w-10 outline-none px-2 py-1 rounded text-sm' type="number" />
                </div>
                <div className="flex justify-between mb-3 text-sm">
                  <span>Adult</span>
                  <input className='w-10 outline-none px-2 py-1 rounded text-sm' type="number" placeholder={options.adult} min={0} />
                </div>
                <div className="flex justify-between mb-3 text-sm">
                  <span>Children</span>
                  <input className='w-10 outline-none px-2 py-1 rounded text-sm' type="number" min={0} placeholder={options.children} />
                </div>
                <div className="flex justify-between mb-3 text-sm">
                  <span>Room</span>
                  <input className='w-10 outline-none px-2 py-1 rounded text-sm' type="number" min={0} placeholder={options.room} />
                </div>
              </div>
            </div>
            <button className='px-4 py-1 bg-blue-500 text-white w-[100%] border-none rounded cursor-pointer'>Search</button>
          </div>
          <div className="flex-2">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  )
}

export default List