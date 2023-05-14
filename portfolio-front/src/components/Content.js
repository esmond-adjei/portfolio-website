import React from 'react';
import Card from './Card';
import cardImage from '../images/kid-engineer.jpg';
import { faSquareJs } from '@fortawesome/free-brands-svg-icons';
// import { Container, Row, Col } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';


function MainContent() {

    const cardData = {
        imageSrc: cardImage,
        title: 'Example Project',
        icons: [
          faSquareJs,
          faSquareJs,
          faSquareJs
        ],
        description: 'This is an example project description.\nDon\'t mess with this',
        readMoreLink: 'https://example.com/read-more',
        viewProjectLink: 'https://example.com/view-project',
      };

    return (
        <div className='main-content'>
            <div className='profile__column'>
                <h2 className='category__heading'>Profile</h2>
            </div>

            <div className='content__column'>
                <div className='category'>
                    <h2 className='category__heading'>PROJECTS</h2>
                <Card
                    imageSrc={cardData.imageSrc}
                    title={cardData.title}
                    icons={cardData.icons}
                    description={cardData.description}
                    readMoreLink={cardData.readMoreLink}
                    viewProjectLink={cardData.viewProjectLink}
                />
                <Card
                    imageSrc={cardData.imageSrc}
                    title={cardData.title}
                    icons={cardData.icons}
                    description={cardData.description}
                    readMoreLink={cardData.readMoreLink}
                    viewProjectLink={cardData.viewProjectLink}
                />
                <Card
                    imageSrc={cardData.imageSrc}
                    title={cardData.title}
                    icons={cardData.icons}
                    description={cardData.description}
                    readMoreLink={cardData.readMoreLink}
                    viewProjectLink={cardData.viewProjectLink}
                />
                </div>
                <div className='category'>
                    <h2 className='category__heading'>SKILLS</h2>
                </div>
                <div className='category'>
                    <h2 className='category__heading'>BLOG</h2>
                </div>
                <div className='category'>
                    <h2 className='category__heading'>INTERESTS</h2>
                </div>
            </div>
        </div>
    );
};

export default MainContent;
