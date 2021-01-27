import React from 'react';

function Title(params) {
    return(
        <div className = "title">
            <h1><strong>{params.title}</strong></h1>
            <hr/>
        </div>
    );
}

export default Title;