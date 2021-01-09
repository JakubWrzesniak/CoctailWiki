import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export const Loading = () =>{
  return(
    <div className = "container">
      <div className ="row">
        <div className="col-3 offset-5">
          <div className = "loading">
            <FontAwesomeIcon pulse = {true}  icon ={faSpinner} color="black" size="7x"/>
            <span className="fa fa-spinner fa-pulse fa-3x fa-fw test-primary"></span>
            <p>Loading . . .</p>
          </div>
        </div>
        </div>
    </div>
  );
};