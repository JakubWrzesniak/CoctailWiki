import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export const Loading = () =>{
  return(
    <div className="col-12">
        <FontAwesomeIcon pulse = {true}  icon ={faSpinner} color="black"/>
        <span className="fa fa-spinner fa-pulse fa-3x fa-fw test-primary"></span>
        <p>Loading . . .</p>
    </div>
  );
};