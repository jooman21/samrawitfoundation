import React from 'react'
import './theFoundation.css'
import Objectives from '../../components/Foundations/Objectives';
import FoundationHeader from '../../components/Foundations/FoundationHeader'
import Header from '../../components/header/Header';

const thefoundation = () => {
  return (
    <>
        <div className="FoundationHeaderback">
           <Header />
            
            <FoundationHeader />
        </div>

        <div>
            <Objectives />
        </div>
    
    
    </>
  )
}

export default thefoundation