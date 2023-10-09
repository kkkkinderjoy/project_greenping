import React from 'react'
import {Route, Routes } from 'react-router-dom';
import Review from '../components/LJS/Review';
import Content from '../components/LJS/Content';
import Search from '../components/CYR/Search';
import Choice from '../components/KNH/Choice';
import Eventbanner from '../components/PSY/Eventbanner';
import Market from '../components/PSY/Market';
import Msearch from '../components/CYR/Msearch';
import Story from '../components/HYJ/Story';



function Main() {

  return (
    <>
      <Search />
      {/* <Msearch /> */}
      <Choice />
      <Review />
      <Eventbanner />
      <Market />
      <Story />
      <Content />
    </>
  )
}

export default Main