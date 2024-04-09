import { useEffect, useState } from 'react';
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns"
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()
    const [destination, setDestination] = useState('');
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    });
    useEffect(() => {
        if (openDate) {
            setOpenOptions(false);
        }
    }, [openDate]);

    useEffect(() => {
        if (openOptions) {
            setOpenDate(false);
        }
    }, [openOptions]);

    const handleOption = (name, operation) => {
        setOptions((prev) => ({
            ...prev,
            [name]: operation === 'i' ? prev[name] + 1 : prev[name] - 1,
        }));
    };
    const handleSearch = () => {
        // const serializedOptions = JSON.stringify(options);
        navigate("/hotels", { state: { destination, date, options } });
    }

    return (
        <div className='h-[400px] bg-blue-500 flex justify-center items-center relative'>
            <div className="w-[100%] max-w-[1024px] text-white">
                <h1 className='font-bold text-5xl'>A Lifetime of discounts? Its Genius.</h1>
                <p className='font-semibold text-xl mt-4'>Get rewarded for your travels - unklocks instant savings of 10%</p>
                <button className='border-[2px] px-5 py-2 mt-3'>Sign/Register</button>
                <div className="">
                    <div className="h-[50px] bg-white shadow-md shadow-slate-400  flex items-center justify-around px-[10px] rounded-[5px] absolute bottom-[-25px] w-[100%] max-w-[1024px]">
                        <input
                            type="text"
                            placeholder='where are you going'
                            className='border-none outline-none text-gray-500 font-semibold cursor-pointer'
                            onChange={(e) => setDestination(e.target.value)}
                        />
                        <span onClick={() => setOpenDate(!openDate)} className='text-gray-500 font-semibold cursor-pointer'>{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(date[0].endDate, 'MM/dd/yyy')}`}</span>
                        {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className='absolute top-[55px] shadow-lg shadow-slate-400 rounded-lg z-10'
                        />}
                        <span onClick={() => setOpenOptions(!openOptions)} className='text-gray-500 font-semibold cursor-pointer'>{`${options.adult} adult, ${options.children} children, ${options.room} room`}</span>
                        {openOptions &&
                            <div className='shadow-lg shadow-slate-400 absolute top-[55px] bg-white text-white rounded left-[630px] p-2 z-10'>
                                <div className="w-[200px] flex justify-between m-[10px]">
                                    <span className='text-gray-400'>Adult</span>
                                    <div className='flex items-center gap-2 text-sm text-black'>
                                        <button
                                            disabled={options.adult <= 1}
                                            className='w-[30px] h-[30px] border-2 border-blue-500 disabled:cursor-not-allowed rounded font-bold text-xl'
                                            onClick={() => handleOption('adult', 'd')}
                                        >-</button>
                                        <span className='font-bold text-sm'>{options.adult}</span>
                                        <button className='w-[30px] h-[30px] border-2 border-blue-500 rounded font-bold text-xl' onClick={() => handleOption('adult', 'i')}>+</button>
                                    </div>
                                </div>
                                <div className="w-[200px] flex justify-between m-[10px]">
                                    <span className='text-gray-400'>Children</span>
                                    <div className='flex items-center gap-2 text-sm text-black'>
                                        <button
                                            disabled={options.children <= 0}
                                            className='w-[30px] h-[30px] border-2 border-blue-500 disabled:cursor-not-allowed rounded font-bold text-xl'
                                            onClick={() => handleOption('children', 'd')}
                                        >
                                            -
                                        </button>
                                        <span className='font-bold text-sm'>{options.children}</span>
                                        <button
                                            className='w-[30px] h-[30px] border-2 border-blue-500 rounded font-bold text-xl'
                                            onClick={() => handleOption('children', 'i')}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <div className="w-[200px] flex justify-between m-[10px]">
                                    <span className='text-gray-400'>Room</span>
                                    <div className='flex items-center gap-2 text-sm text-black'>
                                        <button
                                            disabled={options.room <= 1}
                                            className='w-[30px] h-[30px] border-2 border-blue-500 disabled:cursor-not-allowed rounded font-bold text-xl'
                                            onClick={() => handleOption('room', 'd')}
                                        >
                                            -
                                        </button>
                                        <span className='font-bold text-sm'>{options.room}</span>
                                        <button
                                            className='w-[30px] h-[30px] border-2 border-blue-500 rounded font-bold text-xl'
                                            onClick={() => handleOption('room', 'i')}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>}
                        <button className='bg-blue-500 px-2 py-1 rounded' onClick={handleSearch}>Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header