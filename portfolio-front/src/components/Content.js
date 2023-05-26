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
        <main className='main-content'>
            <section className='profile__column'>
                <h2 className='category__heading'>Profile</h2>
                <div className='profile__content'>
                    <div className='profile__picture'></div>
                    <div className='profile__contact'></div>
                    <div className='profile__about'></div>
                </div>
            </section>

            <section className='content__column'>
                <section className='category'>
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
                </section>
                <section className='category'>
                    <h2 className='category__heading'>SKILLS</h2>
                </section>
                <section className='category'>
                    <h2 className='category__heading'>BLOG</h2>
                </section>
                <section className='category'>
                    <h2 className='category__heading'>INTERESTS</h2>
                </section>
            </section>

            <div className='back-to-top'>^</div>
        </main>
    );
};

export default MainContent;
