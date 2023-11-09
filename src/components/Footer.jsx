import React from 'react'
import './footer.css';
import CenterMenu from './CenterMenu';
import { Facebook, LinkedIn, Twitter, YouTube } from '@mui/icons-material';
const Footer = () => {
   
  return (
    <div className=" footer">
      <CenterMenu />
      {/* Social icons */}
      <div className="footer2 flex w-[100%] justify-center mt-14">
        <div className="facce">
          <Facebook/>
        </div>{" "}
        <div className="facce">
          <Twitter/>
        </div>{" "}
        <div className="facce">
          <LinkedIn/>
        </div>{" "}
        <div className="facce">
          <YouTube/>
        </div>
      </div>
      {/* detail */}
      <div className="moredetail">
      <span className=" moretext ">
        Duis feugiat congue metus, ultrices vulputate nibh viverra eget.
        Vestibulum ullamcorper volutpat varius.
      </span>
      </div>
    </div>
  )
}

export default Footer