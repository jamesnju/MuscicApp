import React from 'react'
import './hero.css';
import DownLoadAds from './DownLoadAds';
function Hero() {
  return (
    <div className='wrapper'>
        {/* leftside */}
        <div className="headings">
            <span className='span1'><b>Experience Best</b> </span>
            <span className='span2' ><b>And high Quality Songs</b></span>
            <span className='span3'>From you All best Favorite Singers <br/>
            And celebrities from all over the world
            </span>

            {/* Download ads */}
            <div>
                <span className="ads">Now Available for both adroind and Operating system(OS)</span>
                <DownLoadAds/>
            </div>
        </div>
        {/* right side */}
        <div className="images">
            <img src={require("../img/backgraphics.png")} alt="" className='img1'/>
            <img src={require("../img/p 1.png")} alt="" className='img2'/>
            <img src={require("../img/p 2.png")} alt="" className='img3'/>
            <img src={require("../img/p 3.png")} alt="" className='img4'/>
            <img src={require("../img/p 4.png")} alt="" className='img5'/>
        </div>
    </div>
  )
}

export default Hero