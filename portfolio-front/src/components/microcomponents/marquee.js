import React, { useEffect } from 'react';

const Marquee = ({icons}) => {
  useEffect(() => {
    const marqueeElementsDisplayed = getComputedStyle(document.documentElement).getPropertyValue("--marquee-elements-displayed");
    const marqueeContent = document.querySelector("ul.marquee-content");

    document.documentElement.style.setProperty("--marquee-elements", marqueeContent.children.length);

    for (let i = 0; i < marqueeElementsDisplayed; i++) {
      marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
    }
  }, []);

  return (
    <div className="marquee">
      <ul className="marquee-content">
      {icons.map((icon, index) => (
            <li><object 
             key={index}
             type='image/svg+xml' 
             data={icon} 
             width={64} 
             height={64} 
             aria-label={`icon-${toString(icon)}`} 
             className= 'big-logo'
             />
             </li>
        ))}
      </ul>
    </div>
  );
};

export default Marquee;
