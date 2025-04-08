import React from 'react'
import Title from './Title';
import Todoinput from './Todoinput';

const Home = () => {
  return (
    <div className="container">
    <Title text="TO DO LIST"/>
    <Todoinput placeholder="Enter your task here..."/>
    </div>
  )
}

export default Home