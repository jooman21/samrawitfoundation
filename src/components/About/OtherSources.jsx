import React from 'react'
import './About.css'
import { Link } from "react-router-dom";

const OtherSources = () => {
  return (
    <div className="card-grid">

        <div className="Youtube_card">
            <div className="card-info">
                <a className="title" href="https://www.youtube.com/watch?v=Oslc2H6WcgA"><img className='youtubeImg' src={process.env.PUBLIC_URL +"/assets/youtube/1.png"} alt="youtubeImg" /></a>
            </div>
        </div>

        <div className="Youtube_card ">
            <div className="card-info ">
                <a className="title" href="https://www.youtube.com/watch?v=NvQhPyxpvs4"><img className='youtubeImg' src={process.env.PUBLIC_URL +"/assets/youtube/5.png"} alt="youtubeImg" /></a>
            </div>
        </div>

        <div className="Youtube_card">
            <div className="card-info">
                <a className="title" href="https://www.youtube.com/watch?v=TwvurdBtuX4"><img className='youtubeImg' src={process.env.PUBLIC_URL +"/assets/youtube/3.png"} alt="youtubeImg" /></a>
            </div>
        </div>

        <div className="Youtube_card forthChild">
            <div className="card-info">
                <a className="title" href="https://www.youtube.com/watch?v=NoLyOAptMTM"><img className='youtubeImg' src={process.env.PUBLIC_URL +"/assets/youtube/4.png"} alt="youtubeImg" /></a>
            </div>
        </div>

        <div className="Youtube_card fifthChild">
            <div className="card-info">
                <a className="title" href="https://www.youtube.com/watch?v=WPiWh44JAlo"><img className='youtubeImg' src={process.env.PUBLIC_URL +"assets/youtube/2.png"} alt="youtubeImg" /></a>
            </div>
        </div>
        

        <Link to='/galleries' ><button className="button Youtube_cardBtn"><svg fill="currentColor" viewBox="0 0 24 24" className="icon"><path clip-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fill-rule="evenodd"></path></svg></button></Link>

</div>

  )
}

export default OtherSources