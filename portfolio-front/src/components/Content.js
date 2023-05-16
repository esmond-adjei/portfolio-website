import React from 'react';
import Card from './Card';
import cardImage from '../images/kid-engineer.jpg';
import { faSquareJs, faPython } from '@fortawesome/free-brands-svg-icons';


function MainContent() {

    const cardData = {
        imageSrc: cardImage,
        title: 'Example Project',
        icons: [
          faSquareJs,
          faPython,
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
                <div className='profile__content'>
                    <div className='profile__picture'></div>
                    <div className='profile__contact'></div>
                    <div className='profile__about'></div>
                </div>
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

            <div className='back-to-top'>^</div>
        </div>
    );
};

export default MainContent;
