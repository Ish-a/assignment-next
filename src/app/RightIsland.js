import React from 'react'
import "./RightIsland.css";
import "./frontpage.css";

const RightIsland = () => {
  return (
    <div className='right-island-outer'>
      <div className='right-island-inner right-links'>
        <a>
          <span className='right-contact-sales right-links '>
            Contact Sales
          </span> 
        </a>

        <a>
          <span className='right-signin right-links'>
            Sign in
          </span>
        </a>

        <a>
          <span className='right-view-demo right-links'>
            View demo
          </span>
        </a>

        <a>
          <span className='intro-free-trial-nav right-links'>
              Start free trial
          </span>
        </a>

      </div>

    </div>
  )
}

export default RightIsland