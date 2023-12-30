import React from 'react'
import Founders from '../home/Founders'
function Introduction() {
  return (
   <div>
    <div className="home__contents" id='foundation'>
      
            <h1 className='h1'>Samrawit Foundation</h1>
            <p>"She was 9 years old when she was passed away on 12.10.13 (E.C) or 19/06/2021 (G.C) due to a sudden accident. Due to this, her parents determined to ascertain some kind of organization by securing the start-up fund, establishing a proper coordination office, hiring the necessary staffing intended to support marginalized and destitute children, mothers and elder people in her name."
            </p>
        </div>
        <div className="home__content container founderscompon">
         <Founders />
        </div>
   </div>
  )
}

export default Introduction