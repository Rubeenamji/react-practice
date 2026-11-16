import { useState,useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Layout from './layouts/Layout'
import {Routes,Route} from 'react-router-dom'
import RecipeList from './components/RecipeList'
function App() {
  return(
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>
         <Route index element={<RecipeList/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App;
