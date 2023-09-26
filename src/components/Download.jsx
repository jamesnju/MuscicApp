import React from 'react'
import DownLoadAds from './DownLoadAds';
import './download.css';
const Download = () => {
  return (
    <div className="download">
    {/* tild icon or path icon */}
    <img src={require("../img/Path 318.png")} alt="" className="downicon" />
    {/* heading */}
    <div className="headline">
      <span>Download The Best Music</span>
      <span>
        <b>App Now!</b>
      </span>
      <span className="description">
        Duis feugiat congue metus, ultrices vulputate nibh viverra eget.<br/>
        Vestibulum ullamcorper volutpat varius.
      </span>
    </div>
    {/* dowload ads */}
    <div className="mt-14">
      <DownLoadAds/>
    </div>
  </div>
  )
}

export default Download