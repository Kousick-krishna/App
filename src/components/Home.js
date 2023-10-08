import React from 'react'

const Home = () => {
  return (
    <div className='pt-52 flex items-center justify-center'>
    <div className='flex flex-col items-center pt-20 pb-24 border-4 border-black w-72 rounded-md bg-gray-200 '>
      <h1 className='text-3xl text-center p-10 text-gray-600'>AquaAlert</h1>
      <button className='bg-blue-500 rounded-md p-4 m-2 hover:text-white'><a href='/LocationShow'>Organization Login</a></button>
      <button className='bg-blue-500 rounded-md p-4 m-2 w-40 hover:text-white'><a href='/Login'>Public Login</a></button>
    </div>
    </div>
  )
}

export default Home
