import React from 'react';
import { FaBeer } from "react-icons/fa";

function Slogan() {
  return (
    <div className="container slongan py-5" id="featured-3">
    <div className="row  py-5">
      <div className="feature col">
        <div className="mb-3">
        <FaBeer />
          {/* <svg className="bi" width="1em" height="1em"><use xlink:href="#collection"></use></svg> */}
        </div>
        <h5 className="fs-2 text-body-emphasis">Lorem ipsum dolor</h5>
        
      </div>
      <div className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
          {/* <svg className="bi" width="1em" height="1em"><use xlink:href="#people-circle"></use></svg> */}
          <FaBeer />
        </div>
        <h5 className="fs-2 text-body-emphasis">Secured <br/>Lorem ipsum dolor</h5>
       
      </div>
      <div className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
        <FaBeer />
          {/* <svg className="bi" width="1em" height="1em"><use xlink:href="#toggles2"></use></svg> */}
        </div>
        <h5 className="fs-2 text-body-emphasis">Lorem ipsum dolor</h5>
        
        
      </div>
      <div className="feature col">
        
        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
        <FaBeer />
          {/* <svg className="bi" width="1em" height="1em"><use xlink:href="#toggles2"></use></svg> */}
        </div>
        <h5 className="fs-2 text-body-emphasis">Lorem ipsum dolor</h5>
        
        
      </div>
    </div>
  </div>
  )
}

export default Slogan