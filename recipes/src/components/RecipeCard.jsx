import React from 'react'

function RecipeCard({imageUrl,name,prepTimeMinutes,cookTimeMinutes,
    difficulty,servings,caloriesperServing,id}) {
  return (
    <div className='card' key={id}><img src={imageUrl} alt='recipe_img'/>
    <div className='card-body'>
        <h3>{name}</h3>
        <p>
            <strong>Prep:</strong>{prepTimeMinutes }mins
        </p>
        <p>
            <strong>Cook:</strong>{cookTimeMinutes }mins
        </p>
        <p>
            <strong>Difficulty:</strong>{difficulty }
        </p>
        <p>
            <strong>Servings:</strong>{servings }
        </p>
        <p>
            <strong>Calories:</strong>{caloriesperServing }kcal
        </p>
    </div>
    </div>
  )
}

export default RecipeCard;