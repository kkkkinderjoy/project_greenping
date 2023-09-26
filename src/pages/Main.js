import React from 'react'
import {Route, Routes } from 'react-router-dom';
import Review from '../components/LJS/Review';
import Content from '../components/LJS/Content';
import Search from '../components/CYR/Search';


function Main() {

  return (
    <>
        <Search />
        <Review />
        <Content />
    </>
    
  )
}

export default Main