import React from 'react'
import './search.css';
import MusicPlayer from './MusicPlayer';
function Search() {
  return (
    <div className='search'>
        {/* left side */}
        <div className="left">
            <img src={require("../img/backgraphics.png")}
            alt=""
            className='leftimg1' />
            <img src={require("../img/d1.png")}
            alt=""
            className='leftimg2' />
            <img src={require("../img/d2.png")}
            alt=""
            className='leftimg3' />
            <img src={require("../img/d3.png")}
            alt=""
            className='leftimg4' />
            <img src={require("../img/d4.png")}
            alt=""
            className='leftimg5' />
        </div>
        {/* right side */}
        <div className="right">
            
            <div className="searchbar">
                <input type="text" placeholder='enter name..' className='searchinpu'/>
                <div className="searchIcon">
                    <img src={require('../img/search.png')} alt="" className='searchimg' />
                </div>
            </div>
            <div className="tild">
                <img src={require('../img/Path 318.png')} 
                alt="" className='tildimg' />
            </div>
            <div className="detail">
                <span>Search Music By</span>
                <span>
                    <strong>Name or Direct URL</strong>
                </span>
                <span className="text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt atque blanditiis 
                    reprehenderit soluta itaque doloremque numquam inventore
                    perferendis aspernatur, provident, adipisci quia voluptates quas, eveniet hic alias aliquam optio animi.
                </span>
            </div>
            <MusicPlayer/>
        </div>
    </div>
  )
}

export default Search