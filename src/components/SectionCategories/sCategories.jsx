import React from 'react'
import { CategoriesContainer, SCategoriesWrapper, CategoriesCube } from './styles'
import Title from '../UI/Title/title';
import CategoryBtn from '../UI/CategButton/categButton'
import {FiCamera, FiMonitor, FiHeadphones, FiSmartphone, FiWatch } from "react-icons/fi";
import { BsController } from "react-icons/bs";

const SectCategories = () => {
  const arrayCateg = [
     {
          id:0,
          category: "cameras",
          icon: <FiCamera/>
     },
     {
          id:1,
          category: "computers",
          icon: <FiMonitor/>
     },
     {
          id:2,
          category: "gaming",
          icon: <BsController/>
     },
     {
          id:3,
          category: "Headphones",
          icon: <FiHeadphones />
     },
     {
          id:4,
          category: "Phones",
          icon: <FiSmartphone/>
     },
     {
          id:5,
          category: "Smartwatch",
          icon: <FiWatch/>
     }
  ]   

  return (
    <SCategoriesWrapper>
     <Title sectionName="Categories" title={"Browse By Category"}/>
     <CategoriesContainer>
          {
               arrayCateg.map((item)=>
               <CategoryBtn key={item.id} icon={item.icon} txt={item.category} click={() => console.log(item.category)}/>)
          }
     </CategoriesContainer>
    </SCategoriesWrapper>
  )
}

export default SectCategories