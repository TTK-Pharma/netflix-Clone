import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Movies from './movies';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

import 'tailwindcss/tailwind.css'; 

function Row({title, fetchURL, rowId}) {
  const [movies, setMovies] = useState([])

  useEffect(()=>{
    axios.get(fetchURL)
    .then((response)=> {
      setMovies(response.data.results)
    })
  }, [fetchURL])
  console.log(movies)

  const slideLeft = ()=>{
    var slider = document.getElementById('slider' + rowId)
    slider.scrollLeft = slider.scrollLeft - 500
  }

  const slideRight = ()=>{
    var slider = document.getElementById('slider' + rowId)
    slider.scrollLeft = slider.scrollLeft + 500
  }

  return (
    <>
      <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
      <div className='relative '>
        
        <MdChevronLeft 
          onClick={slideLeft} className=' absolute rounded-full z-40 bg-white  opacity-50 hover:bg-black hover:text-white hover:opacity-100 top-[48%] left-[1%] cursor-pointer' size={30}/>
        <div id={'slider' + rowId} className='w-full h-full flex overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-none relative'>
          {
            movies.map((item, index)=> {
              return(
                <div>
                  <Movies images={item} index={index} name1={item.original_name} name2={item.original_title}/>
                  
                </div>
              )
            })
            
          }
        </div>
        <MdChevronRight
           onClick={slideRight} className='rounded-full bg-white absolute opacity-50 hover:bg-black hover:text-white top-[48%] right-[1%] cursor-pointer' size={30}/>
      </div>
    </>
  )
}

export default Row