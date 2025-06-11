import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { Padding } from '@mui/icons-material';
import Button from '@mui/material/Button';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const RightPart = () => {

    const handleChangeTheme = () => {
        console.log("Change Theme");
    }



    return (
        <div className='py-5 sticky top'>
            <div className='relative flex items-center '>
                <input
                    type="text"
                    className='py-3 rounded-full text-gray-500 w-full pl-12' />
                <div className='absolute top-0 left-0 pl-3 pt-3'>
                    <SearchIcon className='text-gray-500' />
                </div>
                <Brightness4Icon onClick={handleChangeTheme} className='ml-3 cursor-pointer' />

            </div>
            <section className='my-5'>
                <h1 className='text-xl font-bold '> Get Verified</h1>
                <h1 className='font-bold my-2'>Subcribe to unlocck new features</h1>
                <Button variant="contained" sx={{ Padding: "10px", PaddingX: "20px", borderRadius: "20px" }} >
                    Get Verified
                </Button>

            </section>
            <section className='mt-7 space-y-5'>
                <h1 className='font-bold text-xl py-1'>what's happening</h1>
                <div>
                    <p className='text-sm'>IPL-2025</p>
                    <p className='font-bold'>RCB is chanmpign of Ipl-2025</p>
                </div>
              {[1,1,1,1,1].map((item)=><div className='flex justify-between w-full'>
                    <div>
                        <p>Entertianment Trending</p>
                        <p className='font-bold'>#THeMarvels</p>
                        <p>34.4k Tweets</p>
                    </div>
                    <MoreHorizIcon />

                </div>)  }

            </section>
        </div>
    )
}

export default RightPart