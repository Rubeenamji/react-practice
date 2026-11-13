import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import HeadingComponent from './components/HeadingComponent.jsx'
import ButtonComponent from './components/ButtonComponent.jsx'
import Logo from './components/Logo.jsx'
import SelectBox from './components/SelectBox.jsx'
function App() {
  const showAlert=()=>
  {
    alert("hellooo");
  }
  const options=[
    {label:'Alappuzha',value:'alpy'},
    {label:'Malappuram',value:'mlp'},
    {label:'Calicut',value:'clt'}
  ];
  return (
    <>
     
     <ButtonComponent text="click me..." handleClick={showAlert}/>
     <HeadingComponent name="Ruby" age={35} />
      <Logo url= "favicon.svg"/>          
        <SelectBox label="Select City" options={options}/>       
    </>
  )
}

export default App
