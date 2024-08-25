/*import Header from "./components/Header"
export default function App() {

  return(
    
   <div className="app">
      <Header/>
      ROSE 
   </div>
      
  )
}*/

import Header from "./components/Header";
import  {BannerSection}  from "./components/BannerSection";
import React from 'react'
import { CategoriesSection } from "./components/CategoriesSection";
import { ProductSection } from "./components/ProductSection";

const App = () => {
  return (
    <div>
      <Header/> 
      <BannerSection/>
      <CategoriesSection/>
      <ProductSection/>
    </div>
  )
}
export default App;



