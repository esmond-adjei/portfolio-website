import React from 'react';
import Card from './Card';
import cardImage from '../images/kid-engineer.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareJs, faPython, faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

// {/* <section className='content__column'>
//         </section> */}

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
            <section className='profile'>
                <h2 className='section__heading'>PROFILE</h2>

                <div className='profile__section'>
                    <div className='profile-card'>
                        <div className='profile__picture'></div>
                        <div className='card__icons'>
                            <FontAwesomeIcon icon={faLinkedin} className='card__icon'/>
                            <FontAwesomeIcon icon={faTwitter} className='card__icon'/>
                            <FontAwesomeIcon icon={faGithub} className='card__icon'/>
                        </div>
                        <div className='profile__contact'>
                        </div>
                    </div>
                    <div className='profile__text'>
                        <h2>Esmond A.</h2>
                        <small>(aka <i>x'mon</i>)</small>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Incidunt, dolor praesentium? Vel doloribus nulla, corrupti
                        distinctio minus suscipit molestias dolorum consequatur aperiam,
                        minima hic repudiandae ad a quas quod corporis!
                        </p>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Earum labore nostrum perspiciatis veritatis alias sit iste!
                        </p>
                    </div>
                </div>

            </section>

            <section className='category'>
                <h2 className='section__heading'>PROJECTS</h2>
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
                <h2 className='section__heading'>SKILLS</h2>
            </section>
            <section className='category'>
                <h2 className='section__heading'>BLOG</h2>
            </section>
            <section className='category'>
                <h2 className='section__heading'>INTERESTS</h2>
            </section>

            <div className='back-to-top'>^</div>
        </main>
    );
};

export default MainContent;
