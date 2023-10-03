import React from 'react'
import './downloadads.css'

function DownLoadAds() {
  return (
    
    <div className="download-images">
        <img src={require("../img/App Store.png")} className='storeapp' alt="apple store" />

        <img src={require('../img/Google Play.png')} className='storeapp' alt="Google Store" />
    </div>
  
  )
}

export default DownLoadAds