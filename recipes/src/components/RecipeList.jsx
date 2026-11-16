import { useState,useEffect } from "react";
import RecipeCard from "./RecipeCard";
const RecipeList=()=>{
    const [recipes,setRecipes]=useState([]);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(false);
    useEffect(()=>{
        async function fetchRecipes(){
            try{
                setLoading(true);
                const recipesResponse=await fetch('https://dummyjson.com/recipes?limit=10')
                const recipesJson=await recipesResponse.json();
                setRecipes(recipesJson.recipes);
                setLoading(false);
            }
            catch(error){
                setLoading(false);
                setError(true);
            }
        }
        fetchRecipes();
    },[])
    return<>
    {loading&&<div><h1>Loading...</h1></div>}
    {error&&<div>Something went wrong...</div>}
    <div className="card-grid">
       {recipes.map((recipe)=>
       <RecipeCard id={recipe.id}
       imageUrl={recipe.image}
       name={recipe.name}
       prepTimeMinute={recipe.prepTimeMinutes}
       cookTimeMinute={recipe.cookTimeMinutes}
       servings={recipe.servings}
       difficulty={recipe.difficulty}
       caloriesperServing={recipe.caloriesperServing}/> )}
    </div>
    </>

    
}
export default RecipeList;