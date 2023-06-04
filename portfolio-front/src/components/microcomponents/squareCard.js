import React from 'react';


function squareCard({backImage, cardType}) {
    return ( 
        <div style={{backgroundImage: `url(${backImage})`, backgroundSize: "cover", width: "300px", height: "300px"}}
            className={cardType}>
            <h2>hello</h2>
            <p>Lorem Ipsum and osme randome taext. The quick brown fox jumps over the lazy dog</p>
        </div>
     );
}

export default squareCard;