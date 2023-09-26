import React from 'react'
import {Route, Routes } from 'react-router-dom';
import Review from '../components/LJS/Review';
import Content from '../components/LJS/Content';


function Main() {

  return (
    <>
        <Review />
        <Content />
    </>
    
  )
}

export default Main