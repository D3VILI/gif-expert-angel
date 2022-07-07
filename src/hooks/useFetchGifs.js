import { useState,useEffect } from "react";
import { getGifts } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
    const [imagines, setImagines] = useState([]);
    const [isloading, setIsloading] = useState(true);
  useEffect( () =>{
    getGifts(category).then(newImages => setImagines(newImages));
    setIsloading(false);
  },[])

  return{
    imagines,
    isloading
  }
}


