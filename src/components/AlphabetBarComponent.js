import React from 'react';
import { Link } from 'react-router-dom';

function AlphabetList(params) {
    var alphabet = '0123456789ABCDEFGHIJKLMNOPRSTUWXYZ'.split('').map((elem) => { return <span><Link to={`/coctails/${elem}`}>{elem}</Link> / </span> })
    return (
    <div className="container">
        <div className="row">
            <div className = "col-12">
                <div className = "alphabet">
                    <h2>CHECK COCTAIL BY FIRST LETTER</h2>
                    {alphabet}
                </div>
            </div>    
        </div>
    </div>);
}

export default AlphabetList;