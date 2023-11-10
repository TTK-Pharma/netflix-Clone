import React, { useState, useEffect } from 'react';
import requests from './request';
import axios from 'axios';


function Main() {
  const [movies, setMovies] = useState([]);
  const [randomMovie, setRandomMovie] = useState(null);
  const [tvShows, setTvShows] = useState([])

  useEffect(() => {
    axios.get(requests.requestPopular)
      .then((response) => {
        setMovies(response.data.results);

        const randomIndex = Math.floor(Math.random() * response.data.results.length);
        setRandomMovie(response.data.results[randomIndex]);
      })
      .catch((error) => {
        console.error("Error fetching movie data:", error);
      });

      axios.get(requests.requestTv)
      .then((response) => {
        setTvShows(response.data.results);
        
        
      })
      .catch((error) => {
        console.error("Error fetching movie data:", error);
      });
  }, []);
  console.log(tvShows)

  const truncateString = (str, num)=> {
    if(str?.length > num) {
      return str.slice(0, num) + '...'
    } else {
      return str
    }
  }

  return (
    <div>
       
      {
        randomMovie && (
          <div className='w-[100%] h-[550px] text-white '>
            <div className='w-full h-full'>

              <div className=' absolute w-full h-[550px] bg-gradient-to-r from-black' />
              <img src={`https://image.tmdb.org/t/p/original/${randomMovie.backdrop_path}`} alt={randomMovie.title} 
              className='  w-full h-full object-cover poster '/>
              <div className=' absolute  top-[20%] left-[8%] md:p-8 '>
                <h2 className=' mb-[10px] text-3xl'>{randomMovie.title}</h2>
                
                <div className='mb-[10px]'>
                  <button className='border bg-gray-300 text-black border-gray-300 py-1 px-5 rounded '>Play</button>
                  <button className='border text-white border-gray-300 ml-3 px-5 py-2 rounded '>Wath later</button>
                </div>
                <h5 className='mt-5 mb-5'>Released: {randomMovie.release_date}</h5>
                <p className='w-[400px]'>{truncateString(randomMovie?.overview, 125)}</p>
              </div>
            </div>
            
          </div>
          
        )
}
      
    </div>
  );
}

export default Main;
