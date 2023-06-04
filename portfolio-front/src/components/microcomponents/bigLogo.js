import React from 'react';
import './micro.css';

function bigLogo({imageSrc, imageAlt}) {
    return ( 
        <object type='image/svg+xml' data={imageSrc} width={64} height={64} alt-text={imageAlt} className='big-logo'/>
     );
}

export default bigLogo;