import React, {useState, useEffect} from 'react'
import Mealdom from "./components/Mealdom"
function Meal() {
  const[search, setSearch]= useState("");
  const[myMeal, setMyMeal]= useState();

  const searchMeal=(evt) => {
    if(evt.key=="Enter"){
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then(res=>res.json())
      .then(data=>{
        setMyMeal(data.meals)
        })
    }
  }
let arr=["beef","cheese","pork","chicken","salad"]
let ran = Math.floor((Math.random() * 4) + 1)
let src= arr[ran]
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${src}`)
    .then(res=>res.json())
    .then(data=>{
      console.log(arr[ran])
      setMyMeal(data.meals)
      }) 
  }, []);

  return (
    <div className= "main">
        <div className="heading">
            <h1>Search your food Recipe</h1>
            <h4>lorem ipsum dolor</h4>
        </div>
        <div className="searchbox">
            <input type="search" className="searchbar" placeholder="enter food name" onChange={(e) => setSearch(e.target.value)} value={search} onKeyPress={searchMeal}></input>
        </div>
      <div className="container">
        {
          (myMeal==null)? <p>Not found</p> : myMeal.map((res)=>{
            return(
               <Mealdom data={res} />
            )
          })
}
        
        
      </div>
    </div>
  )
}

export default Meal
