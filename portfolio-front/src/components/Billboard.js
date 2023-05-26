import React from 'react';
// import bannerImage from '../images/banner-image.png'
// <img src={bannerImage} alt="banner" className='banner-image' />

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
        </div>
    );
}

export default Billboard;
