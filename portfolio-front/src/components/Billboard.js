import React from 'react';
import me from '../images/stock/esmond-me-low.png';


function Billboard() {
    return (
        <div className="banner">
            <div className='banner_overlay'>
            </div>
            <div className="banner-text">
                <h1>Welcome to My Portfolio 👋</h1>
                <p>Discover my work and learn more about what I do.</p>
                <button className="btn">View Portfolio</button>
            </div>
            <img src={me} alt="esmond" className='banner-image'/>
        </div>
    );
}

export default Billboard;
