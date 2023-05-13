import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faReadme } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';


// {/* <img src={imageSrc} alt="Card"/> */}
const Card = ({ imageSrc, title, icons, description, readMoreLink, viewProjectLink }) => {
  return (
    <div className="card">
        <div className='card__image' style={{backgroundImage: `url(${imageSrc})`}}> 
        </div>
      <div className="card__details">
        <h2 className="card__title">{title}</h2>
        <div className="card__icons">
          {icons.map((icon, index) => (
            <FontAwesomeIcon icon={icon} key={index} className="card__icon" />
          ))}
        </div>
        <p className="card__description">{description}</p>
        <div className="card__links">
          <a href={readMoreLink} className="card__link">
            <FontAwesomeIcon icon={faReadme} className="card__link-icon" />
          </a>
          <a href={viewProjectLink} className="card__link">
            <FontAwesomeIcon icon={faExternalLinkAlt} className="card__link-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;


// import React from 'react';

// function Card({ imageSrc, title, icons, description, readMoreLink, viewProjectLink }) {
//   return (
//     <div className="card">
      
//       <img src={imageSrc} alt={title} className="card__image" />
      
//       <div className="card__details">
//         <h2 className="card__title">{title}</h2>
//         <div className="card__icons">
//           {/* Render icons here */}
//           {icons.map((icon, index) => (
//             <img src={icon} alt={`Icon ${index}`} key={index} />
//           ))}
//         </div>
//         <p className="card__description">{description}</p>
//         <div className="card__links">
//           <a href={readMoreLink} target="_blank" rel="noopener noreferrer">Read More</a>
//           <a href={viewProjectLink} target="_blank" rel="noopener noreferrer">View Project</a>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default Card;
