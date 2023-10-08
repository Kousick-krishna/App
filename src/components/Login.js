import React from 'react'
import { useState } from 'react'


const Login = () => {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
      alert("Your data is submitted")
    const response = await fetch("http://localhost:3001/Login",
    {
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json',
      },
      body : JSON.stringify({username,password}),                 
    });
    if(response.status === 200){
      alert("Login successful");
    }
    else{
      alert('Login unsuccessful');
    }
  }catch(error){
    console.error('Error: ',error);
  }
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
    <div className='pt-48 flex items-center justify-center'>
    <div className='flex flex-col items-center pt-20 pb-24 border-4 border-black bg-gray-200 w-72 rounded-md '>
    <h1 className='text-3xl text-center p-10 text-gray-600'>Sign in</h1>
    
    <input type='text' placeholder='Enter your name' value={username} onChange={(e) => setUsername(e.target.value)} className='p-4 rounded-lg'/>
    <br/>
    <input type='password' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} className='p-4 rounded-lg'/>
    <br/>
    <button className='border-4 text-2xl border-black p-2 rounded-lg hover:text-blue-500'><a href='/Generalpublic'>Login</a></button>
    
    </div>
    </div>
    </form>
    </div>
  )
}

export default Login
