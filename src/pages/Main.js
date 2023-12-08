import React from 'react'
import {Route, Routes } from 'react-router-dom';
import Review from '../components/Review';
import Content from '../components/Content';
import Search from '../components/Search';
import Choice from '../components/Choice';
import Eventbanner from '../components/Eventbanner';
import Market from '../components/Market';
import Msearch from '../components/Msearch';
import Story from '../components/Story';



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