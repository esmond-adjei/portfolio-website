import React from 'react';


function bigLogo({imageSrc, imageAlt}) {
    return ( 
        <object type='image/svg+xml' data={imageSrc} width={64} height={64} aria-label={imageAlt} className='big-logo'/>
     );
}

export default bigLogo;