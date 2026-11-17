import { useState,useEffect } from "react";
import RecipeCard from "./RecipeCard";
const RecipeList=()=>{
    const [recipes,setRecipes]=useState([]);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(false);
    const [searchText,setSearchText]=useState('');
    async function fetchRecipes(){
        let apiUrl='https://dummyjson.com/recipes?limit=10';
        if(searchText.length>1){
            apiUrl=`https://dummyjson.com/recipes/search?q=${searchText}&&limit=10`;
        }
            try{
                setLoading(true);
                const recipesResponse=await fetch(apiUrl);
                const recipesJson=await recipesResponse.json();
                setRecipes(recipesJson.recipes);
                setLoading(false);
            }
            catch(error){
                setLoading(false);
                setError(true);
            }
        }
    
    useEffect(()=>{
        
        fetchRecipes();
    },[])
    const handleSearchTextChange=(event)=>{
        setSearchText(event.target.value);
    }
    const searchSubmit=()=>{
        fetchRecipes();
    }
    return<>
    {loading&&<div><h1>Loading...</h1></div>}
    {error&&<div>Something went wrong...</div>}
    <div className="search-section">
        <input type="text" value={searchText} 
        placeholder="search recipes" name="search"
        onChange={handleSearchTextChange}/>
        <button className="searchBtn" onClick={searchSubmit}>Search </button>
    </div>
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