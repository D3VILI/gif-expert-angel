import { useState } from "react";
import { AddCategory,GifGrid } from "./components";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch']);

    const onAddCategory = ( newCategory ) =>{
        if(categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }

  return (
    <>
        <h1>GIfExpertApp</h1>

        <AddCategory onNewCategory =  {(event) => onAddCategory(event)} /> 
            {
                categories.map( category => (
                        <GifGrid key={category} category={category}/>
                    ) 
                )
            }
    </>
  )
}