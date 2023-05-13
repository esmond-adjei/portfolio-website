import React from 'react';
import Card from './Card';
import cardImage from '../images/kid-engineer.jpg';
import { faSquareJs } from '@fortawesome/free-brands-svg-icons';
// import { Container, Row, Col } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import Profile from './Profile';
// import Projects from './Projects';
// import SkillsTools from './SkillsTools';
// import BlogPosts from './BlogPosts';
// import Interests from './Interests';

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
                <p>profile content</p>
            </div>

            <div className='content__column'>
                    <h2>PROJECTS</h2>
                <div className='content__projects'>
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
                    <h2>SKILLS</h2>
                <div className='content__skills'>
                </div>
                    <h2>BLOG</h2>
                <div className='content__blog'>
                </div>
                    <h2>INTERESTS</h2>
                <div className='content__interests'>
                </div>
            </div>
        </div>
    );
};

export default MainContent;
