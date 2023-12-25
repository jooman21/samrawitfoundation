import React from 'react'
import './Objective.css'


const Objectives = () => {
  return (
    <div className='the_objective'>
      <div className="home__contents objective_title">
        <h1 className='h1'>Objectives</h1>
      </div>
      
      <div className='Objectives_section container grid'>

        <div className="objectives__content grid">
          <div className="Objective_Goal">
            <i className='uill uil-crosshairs objectives__icon'></i>
            <h4  className='Objective__Title'>Our Goal</h4>
            <h5 className='Objective_description'> At our charity foundation, we believe in the power of kindness and compassion to make the world a better place. Our mission is to provide assistance and support to those in need, whether it’s through providing cash, food and shelter to the homeless. </h5>
          </div>
        </div>

        <div className="objectives__content grid">
          <div className="Objective_Mission">
            <i className='uill uil-eye objectives__icon'></i>
            <h4  className='Objective__Title'>Vission</h4>
            <h5 className='Objective_description'>Empower marginalized individuals in Ethiopia to enhance their lives and positively impact their communities. "== Our Mission Facilitate"</h5>
          </div>
        </div> 

        <div className="objectives__content grid">
          <div className="Objective_Goals">
            <i className='uill uil-rocket objectives__icon'></i>
            <h4 className='Objective__Title'>Mission</h4>
            <h5 className='Objective_description'>Every person should have the right to basic needs, so that children, mothers, and elder people may have dignified, healthy, and secure lives.</h5>
          </div> 
        </div> 

      </div>
    </div>
    
  )
}

export default Objectives