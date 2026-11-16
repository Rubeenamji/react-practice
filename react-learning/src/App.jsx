import { useState,useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Home from './pages/Home'
import BlogList from './pages/BlogList'
import AddBlog from './pages/AddBlog'
import { Routes,Route } from 'react-router-dom'
import NavigationMenu from './components/NavigationBar'

function App(){
  return(
    <>
    <NavigationMenu/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/AddBlog" element={<AddBlog/>}></Route>
      <Route path="/BlogList" element={<BlogList/>}></Route>
    </Routes>

    </>
  )
}
/*function App() {
  const [products,setProducts]=useState([]);
  useEffect(()=>{
    const fetchProducts=async()=>{
      try{
      const response=await fetch('https://dummyjson.com/products?limit=10');
      const responseJson=await response.json();
      console.log(responseJson);
      setProducts(responseJson.products);
      }
      catch(error)
      {
        console.log("Error:",error);
      }
    }
    fetchProducts();
  },[])
  return (
    <>
     
     <h1>Product List</h1>
     {
  
     products.map((product)=>
     <div key={product.sku}>
       <h6>{product.title}</h6>
       <h6>{product.price}</h6>
       <img src={product.thumbnail} width="100px" height="70px"/>

     </div>
    )}
     
    </>
  )
}*/

export default App
