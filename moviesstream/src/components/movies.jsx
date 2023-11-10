import { useState } from "react";
import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import {UserAuth} from '../context/authContext'
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'

function Movies({ images, index, name1, name2 }) {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const {user} = UserAuth();

  const movieId = doc(db, 'users', `${user?.email}`)

  const saveShow = async ()=>{
    if(user?.email) {
      setLike(!like)
      setSaved(true)
      try {
        await updateDoc (movieId, {
          savedShows: arrayUnion({
            id: images.id,
            title: name1 || name2,
            img: images.backdrop_path
          })
        });
        console.log('document added')
      } catch(error) {
        console.log(error, 'failed')
      }

    } else {
      alert('please Login to save a movie')
    }
  }


  
  return (
    <div>
      
      <div className=" relative w-[160px] sm:w-[200px] md:w-[240px] xl:w-[280px] h-auto inline-block cursor-pointer p-2">
      <img
        className="w-full  h-ful block "
        src={`https://image.tmdb.org/t/p/original/${images.backdrop_path}`}
        alt={index}
      />
      <div className="text-white absolute w-full h-full top-0 left-0 hover:bg-black/80 opacity-0 hover:opacity-100">
        <p className="absolute top-[18px] right-[20px]" onClick={saveShow} >
          {like ? <FaHeart /> : <FaRegHeart className=" " />}
          
          
        </p>
      </div>
    </div>
    </div>
    
  );
}

export default Movies;
