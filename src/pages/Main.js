import React from 'react'
import {Route, Routes } from 'react-router-dom';
import Review from '../components/LJS/Review';
import Content from '../components/LJS/Content';
import Search from '../components/CYR/Search';
import Choice from '../components/KNH/Choice';


function Main() {

  return (
    <>
        <Search />
        <Choice />
        <Review />
        <Content />
   </>
    
  )
}

export default Main