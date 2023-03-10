import React from 'react'

function Mealdom(getMeal) {
  console.log(getMeal.data)
  return (
    <div className="card">
      <img src={getMeal.data.strMealThumb} height="330px" width="300px"></img>
      <div className="info">
        <h2>{getMeal.data.strMeal}</h2>
        <p>{getMeal.data.strArea} food</p>
      </div>
      <div className="recipe">
        <h2>Recipe</h2>
        <p>{getMeal.data.strInstructions}</p>
        <img src={getMeal.data.strMealThumb}></img>
        <a href={getMeal.data.strSource}>watch video</a>
      </div>
    </div>
  )
}

export default Mealdom
