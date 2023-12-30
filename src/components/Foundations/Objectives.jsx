import React from 'react'
import './Objective.css'


const Objectives = () => {
  return (
    <div className='the_objective'>
      <div className="home__contents objective_title">
        <h1 className='h1'>Our Core Values</h1>
      </div>
      
      <div className='Objectives_section container grid'>

        <div className="objectives__content grid">
          <div className="Objective_Goal">
            <i className='uill uil-heart objectives__icon'></i>
            <h4  className='Objective__Title'>Our Values</h4>
            <h5 className='Objective_description'>     
            <ul>
              <li> <strong className='red'>S</strong>ympathy  </li>
              <li> <strong className='red'>A</strong>ccountability  </li>
              <li> <strong className='red'>M</strong>orality  </li>
              <li> <strong className='red'>R</strong>espect</li>
              <li> <strong className='red'>A</strong>ssistance</li>
              <li> <strong className='red'>W</strong>ork Responsibly </li>
              <li> <strong className='red'>I</strong>ntegrity/honesty</li>
              <li> <strong className='red'>T</strong>o Share Love</li>
            </ul>
            </h5>
          </div>
        </div>

        <div className="objectives__content grid">
          <div className="Objective_Mission">
            <i className='uill uil-eye objectives__icon'></i>
            <h4  className='Objective__Title'>Our Vission</h4>
            <h5 className='Objective_description'>Every person shall have the right to <strong>‘‘BASIC NEEDS’’</strong>,so that children and elder people shall deserve dignified, healthy and secured life.</h5>
          </div>
        </div> 

        <div className="objectives__content objectives__content_last grid ">
          <div className="Objective_Goals">
            <i className='uill uil-rocket objectives__icon'></i>
            <h4 className='Objective__Title'>Our Mission</h4>
            <h5 className='Objective_description'> <strong>i.  &#160; </strong>Fostering individuals and institutions participation in philanthropy activity in protecting and advancing the worth and rights of children and elder people.</h5>
            <br />
            <h5 className='Objective_description'><strong>ii.  &#160; </strong>Facilitate destitute, excluded and vulnerable children and elder people in Ethiopia shall have the opportunity to improve their lives and to become productive citizen who contribute a positive change in their communities.</h5> 
          </div> 
        </div> 

      </div>
    </div>
    
  )
}

export default Objectives