import React, { useState } from 'react'
import './hero.css';
import DownLoadAds from './DownLoadAds';
import ReactVisibilitySensor from 'react-visibility-sensor';
import {motion} from 'framer-motion';




function Hero() {
  const  [elementIsVisible, setElementIsVisible] = useState(false);
  const bg={
    true : {
      left : '7rem',

    },
    false : {
      left: '19rem'
    }
  };

  const musicPlayer={
    true : {
      left : '295px',

    },
    false : {
      left: '235px'
    }
  };

  const rect={
    true : {
      left : '11rem',

    },
    false : {
      left: '13rem'
    }
  };
  const heart={
    true : {
      left : '11rem',

    },
    false : {
      left: '13rem'
    }
  };

  return (
    <ReactVisibilitySensor onChange={(isVisible) => setElementIsVisible(isVisible)}
    minTopValue={300}>
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
            <motion.img
            variants={bg}
            animate={`${elementIsVisible}`}
            transition={{ duration: 1, type: "ease-out", }}
            src={require("../img/backgraphics.png")} alt="" className='img1'/>
            <motion.img
            variants={musicPlayer}
            animate={`${elementIsVisible}`}
            transition={{ duration: 1, type: "ease-out",}}
            
            src={require("../img/p 1.png")} alt="" className='img2'/>
            <motion.img
            variants={rect}
            animate={`${elementIsVisible}`}
            transition={{ duration: 1, type: "ease-out",}}
            
            src={require("../img/p 2.png")} alt="" className='img3'/>
            <motion.img
            variants={heart}
            animate={`${elementIsVisible}`}
            transition={{ duration: 1, type: "ease-out",}}
            src={require("../img/p 3.png")} alt="" className='img4'/>
            <motion.img
            variants={heart}
            animate={`${elementIsVisible}`}
            transition={{ duration: 1, type: "ease-out",}}  
            
            src={require("../img/p 4.png")} alt="" className='img5'/>
        </div>
    </div>
    </ReactVisibilitySensor>
  )
}

export default Hero