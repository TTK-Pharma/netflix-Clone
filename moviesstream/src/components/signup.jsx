import React from 'react'
import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {UserAuth} from '../context/authContext'

function Signup() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {user, signUp} = UserAuth(); 

  const handleSubmit = async (e)=>{
    e.preventDefault()
    try {
      await signUp(email, password)
    } catch (error) {
      console.log(error)
    }
    if(user) {
      navigate('/')
    }
  }
  
  return (
    <>
      <div className='w-full h-screen'>
        <img className='sm:block hidden absolute w-full h-full object-cover' src={`https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_medium.jpg`} alt="not availabe" />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed pl-[33%] py-20  '>
          <div className='bg-black/80 w-[500px] h-[600px] mx-auto rounded'>
            <h3 className='pt-[22%] pl-[15%] text-4xl text-white'>Sign Up</h3>
            <form onSubmit={handleSubmit}>
            <div className='mt-6 ml-[15%] text-black text-sm'>
            <input type="email" placeholder='Email or phone Number ' 
            onChange={(e)=>setEmail(e.target.value)}
            className='bg-gray-800 p-[4%] w-[350px] rounded ' required autoComplete='currentUser'/>
            </div>
            <div className='mt-3 ml-[15%] text-black text-sm'>
            <input type="password" placeholder='password' className='p-[4%] w-[350px] bg-gray-800 rounded' 
            onChange={(e)=>setPassword(e.target.value)}
            required autoComplete='currentPassword'/>
            </div>
            <button type='submit' className='text-white bg-red-700 mt-12 w-[350px] rounded ml-[15%] justify-center py-[15px]'>Signup</button>
            <div className='mt-3 ml-[15%] relative'>
            <input type="checkbox"/><span className='text-gray-600 text-sm'>Remember me</span>
            <p className='text-gray-600 text-sm absolute right-[80px] top-[1px]'> Need help?</p>
            </div>
            <div className='text-gray-600 flex ml-[15%] mt-3'>
              <p>Already have an account?</p><span className='ml-1 text-white'><Link to='/login'>Login</Link></span>
            </div>
            </form>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup