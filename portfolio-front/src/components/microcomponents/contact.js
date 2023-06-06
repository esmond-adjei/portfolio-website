import React from 'react';


function contact({icon, contactType, contactDetail}) {
    return ( 
        <div className="contact-slip">
            <div className="icon">
                {icon}
            </div>
            <small>{contactType}</small>
            <p>{contactDetail}</p>
        </div>
     );
}

export default contact;