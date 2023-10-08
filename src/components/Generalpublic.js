import React from 'react'

function Generalpublic() {
  return (
    <div className='pt-52 flex items-center justify-center'>
    <div className='flex flex-col items-center pt-20 pb-24 border-4 border-black w-96 rounded-md bg-gray-200 '>
    <form action="/upload" method="post" enctype="multipart/form-data">
    <input type="file" name="image" accept="image/*" className=' pl-4 '/>
    </form>
    <br/>
    <input type='text' placeholder='Enter your Location' className=' p-4 rounded-lg'/>
    <br/>
    <textarea rows={10} cols={10} className='w-1/2 rounded-md' placeholder='Enter your issue'></textarea>
    <br/>
    <button className='p-4 rounded-lg font-semibold bg-white hover:bg-gray-300'><a href='/LocationFinder'>Submit</a></button>
    </div>
    </div>
  )
}

export default Generalpublic
