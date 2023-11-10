import React, { useState, useEffect } from 'react';
import { UserAuth } from '../context/authContext';
import { db } from '../firebase';
import { onSnapshot, doc, updateDoc } from 'firebase/firestore';
import {AiOutlineClose} from 'react-icons/ai'

function SavedShows() {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, 'users', user?.email), (docSnapshot) => {
      if (docSnapshot.exists()) {
        const savedShows = docSnapshot.data()?.savedShows || [];
        setMovies(savedShows);
      } else {
        setMovies([]);
      }
    });

    // Ensure that you're returning the unsubscribe function
    return () => unsubscribe();
  }, [user?.email]);

  const movieRef = doc(db, 'users', user?.email)

  const handleDelete = async(passedId)=> {
    try {
      const filter = movies.filter((item)=>item.id !== passedId)
      await updateDoc(movieRef, {
        savedShows: filter,
      })
    }catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      
      {movies.map((movie) => (
        
        <div key={movie.id} className='text-white  w-[160px] sm:w-[200px] md:w-[240px] xl:w-[280px] h-auto inline-block cursor-pointer p-4'>
          <div className='w-full h-full hover:bg-black/30 absolute top-0 left-0'></div>
          <h2>{movie.title}</h2>
          <img src={`https://image.tmdb.org/t/p/original/${movie.img}`} alt={movie.title} className='w-full h-full block'/>
        <AiOutlineClose className='text-gray-500 absolute top-1 right-3' onClick={()=>{handleDelete(movie.id)}}/>
        </div>
      ))}
      
    </div>
  );
}

export default SavedShows;
