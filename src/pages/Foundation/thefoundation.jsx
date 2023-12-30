import React from 'react'
import './theFoundation.css'
import Header from '../../components/header/Header';
import Objectives from '../../components/Foundations/Objectives';
import FoundationHeader from '../../components/Foundations/FoundationHeader'

const thefoundation = () => {
  return (
    <>
        <div className="FoundationHeaderback">
            <Header />
            <FoundationHeader />
        </div>

        <div className='FoundationBody'>
            <Objectives />
        </div>
    
    
    </>
  )
}

export default thefoundation