import React from "react"

const Recipe = ({title,calories,image,ingredients}) => {
    return(
        <div>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredients =>(
                    <li> {ingredients.text}</li>
                ))}
            </ol>
            <p> Calories: {calories} </p>
            

            <img src= {image} alt = ""/>
        </div>
    )
}

export default Recipe