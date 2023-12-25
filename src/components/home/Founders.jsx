import React from 'react'
import "./founders.css"
function Founders() {
  return (
    <div className="founder__data">
      <div className='founder_sescription_One'>
        <img className = "grid-item imgs mom" src={process.env.PUBLIC_URL +'/assets/family/mar.jpg'} alt='home-img' />
        <h3 className='person_the_name'>Etaferahu Andarge Mekuria</h3>
        <h2 className='person_the_title'>Founder & Executive Board chairman</h2>
      </div>
      
      <div className='founder_sescription_Two '>
        <div className="founder__description">
          <h3 className='valuesTitle'><strong>OUR VALUES</strong></h3>
          <ul>
            <li> <strong>S</strong>ympathy  &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; <p className='valuesAmhric'> (በርህራሄ ማገልገል)</p></li>
            <li> <strong>A</strong>ccountability  &#160; &#160; &#160; &#160; &#160; <p className='valuesAmhric'>(ተጠያቂነት)</p></li>
            <li> <strong>M</strong>orality  &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160;&#160; &#160; &#160; <p className='valuesAmhric'>(ሞራላዊ መሆን)</p></li>
            <li> <strong>R</strong>espect &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; <p className='valuesAmhric'>(በክብር ማገልገል)</p></li>
            <li> <strong>A</strong>ssistance &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; <p className='valuesAmhric'>(ድጋፍና ትብብር ማድረግ)</p></li>
            <li> <strong>W</strong>ork Responsibly &#160; &#160; <p className='valuesAmhric'>(በኃላፊነት መስራት)</p></li>
            <li> <strong>I</strong>ntegrity/honesty &#160; &#160; <p className='valuesAmhric'>( በቅንነት ማገልገል)</p></li>
            <li> <strong>T</strong>o Share Love &#160; &#160; &#160; &#160; &#160; &#160; <p className='valuesAmhric'>(ፍቅር መስጠት)</p></li>
          </ul>
        </div>
      </div>

      <div className='founder_sescription_Three  '>
        <img className = "grid-item  imgs father" src={process.env.PUBLIC_URL +'/assets/family/father.jpg'} alt='home-img' />
        <h3 className='person_the_name'>Tagel Nigatu Kebede (Engineer)</h3>
        <h2 className='person_the_title'>Founder & Executive Director</h2>
      </div>
    </div>
  )
}

export default Founders