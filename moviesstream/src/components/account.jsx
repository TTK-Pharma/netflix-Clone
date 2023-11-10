import React from 'react'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import SavedShows from './savedShows'

function Account() {
  const slideLeft = ()=>{
    var slider = document.getElementById('slider' )
    slider.scrollLeft = slider.scrollLeft - 500
  }

  const slideRight = ()=>{
    var slider = document.getElementById('slider' )
    slider.scrollLeft = slider.scrollLeft + 500
  }
  return (
    <>
    <div className='w-full h-screen'>
        <img className='sm:block hidden absolute w-full h-full object-cover' src={`https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_medium.jpg`} alt="not availabe" />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        </div>
      <h2 className='text-white font-bold md:text-xl p-4'>My Shows</h2>
      <div className='relative '>
        <MdChevronLeft 
          onClick={slideLeft} className=' absolute rounded-full z-40 bg-white  opacity-50 hover:bg-black hover:text-white hover:opacity-100 top-[48%] left-[1%] cursor-pointer' size={30}/>
        <div id={'slider' } className='w-full h-full flex overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-none relative'>
         <SavedShows />
        </div>
        <MdChevronRight
           onClick={slideRight} className='rounded-full bg-white absolute opacity-50 hover:bg-black hover:text-white top-[48%] right-[1%] cursor-pointer' size={30}/>
      </div>
    </>
  )
}

export default Account