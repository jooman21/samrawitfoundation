import React from 'react'
import "./scrollup.css"
function Scrollup() {
  window.addEventListener("scroll", function(){
    const scrollup = document.querySelector(".scrollup");
    // when the scroll is higher than 560 viewport height, add th show-scroll class to a tag with the scroll-top class
    if (this.scrollY >= 560) scrollup.classList.add("show-scroll");
    else scrollup.classList.remove("show-scroll");
  })
  return (
    <a href="#home" className='scrollup'>
      <i className='uil uil-arrow-up scrollup__icon'></i>
    </a>
  )
}

export default Scrollup