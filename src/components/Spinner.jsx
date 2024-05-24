import React from 'react'
import './Spinner.css';

function Spinner() {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
        <div class="loader"></div>
        <p className=' font-extrabold text-green-600 text-[2.5rem]'>Loading...</p>

        

    </div>
    

  )
}


export default Spinner