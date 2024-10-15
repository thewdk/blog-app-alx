import { Label, TextInput, Button } from 'flowbite-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value});
  }
  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(formData),
      })
    } catch (error) {
      
    }
  }
  return (
    <div className='min-h-screen mt-20'>
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center">

      {/* left */}
      <div className="flex-1">
      <Link to='/' className='font-bold dark:text-white text-4xl'>
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>The O2</span>
        Blog
      </Link>
      <p className='text-sm mt-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus qui placeat corrupti quo facilis perspiciatis ipsam commodi alias aut illum voluptatum doloremque nisi cumque sit, neque, eius culpa dolores! Dolorem!</p>
      </div>
      {/* right */}
      <div className="flex-1">
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <div>
            <Label value='Your username' />
            <TextInput type='text' placeholder='Username' id='username' onChange={handleChange}/>
          </div>
          <div>
            <Label value='Your email' />
            <TextInput type='email' placeholder='name@example.com' id='email' onChange={handleChange}/>
          </div>
          <div>
            <Label value='Your password' />
            <TextInput type='password' placeholder='Password' id='password' onChange={handleChange}/>
          </div>
          <Button gradientDuoTone='purpleToBlue' type='submit'>Sign Up</Button>
        </form>
        <div className="flex gap-2 text-sm mt-5">
          <span>Have an account?</span>
          <Link to='/sign-in' className='text-blue-500'>Sign In</Link>
        </div>
      </div>
      </div>
    </div>
  )
}
 