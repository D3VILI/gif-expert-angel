import React from 'react'
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';



export const GifGrid = ({category}) => {

  const { imagines, isloading } = useFetchGifs(category);

  return (
    <>
        <h3>{category}</h3>
        {
          isloading && (<h2>Cargando....</h2>)
        }
        
        <div className='card-grid'>
          {
            imagines.map( (image) => (
              <GifItem key={image.id} {...image} />
            ))
          }
        </div>

    </>
  )
}
