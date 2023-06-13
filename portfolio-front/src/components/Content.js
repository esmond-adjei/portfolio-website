import React from 'react';
import Card from './Card';
import Contact from './microcomponents/contact';
import BigLogo from './microcomponents/bigLogo';
import Sqcard from './microcomponents/squareCard';
import SlidingImage from './microcomponents/slidingImages';
import BackToTopButton from './microcomponents/backToTop';

import Alex from '../images/alex.jpg'
import kidEngineer from '../images/kid-engineer.jpg'
import robotOnDesk from '../images/stock/home-made-robot-desk.jpg';
import fist from '../images/stock/fist.jpg';
import militaryRobot from '../images/stock/military-robot-dog.png';
import sadStudent from '../images/stock/sad-student.jpg';

import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faSquareJs, faPython, faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

// import {linkedin.svg, square-github.svg, square-twitter.svg} from '../../images';
import sqLinkedin from '../images/square-linkedin.svg';
import sqGithub from '../images/square-github.svg';
import sqTwitter from '../images/square-twitter.svg';


function MainContent() {

    const cardData = {
        imageSrc: robotOnDesk,
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
{/* about */}
            <section className='profile'>
                <div className='profile__section'>
                    <div className='profile-card'>
                        <div className='profile__banner'>
                            <div className='profile__picture'></div>
                        </div>
                        <div className='card__icons'>
                            <FontAwesomeIcon icon={faLinkedin} className='card__icon'/>
                            <FontAwesomeIcon icon={faTwitter} className='card__icon'/>
                            <FontAwesomeIcon icon={faGithub} className='card__icon'/>
                        </div>
                        <div className='profile__contact'>
                            <Contact icon={<FontAwesomeIcon icon={faLinkedin}/>}
                                     contactType={'Linkedin'}
                                     contactDetail={'@esmond-adjei'}/>
                            <Contact icon={<FontAwesomeIcon icon={faGithub}/>}
                                     contactType={'GitHub'}
                                     contactDetail={'@esmond-adjei'}/>
                            <Contact icon={<FontAwesomeIcon icon={faTwitter}/>}
                                     contactType={'Twitter'}
                                     contactDetail={'@xmon_jei'}/>
                        </div>
                    </div>
                    <div className='profile__text'>
                        <h2>Esmond <span className='stroked'>A.</span></h2>
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
{/* skills */}
            <section className='skills__section'>
                <h2 className='section__heading'>SKILLS</h2>
                <div className='skill_logos'>
                    <BigLogo imageSrc={sqGithub} imageAlt={'github'}/>
                    <BigLogo imageSrc={sqLinkedin} imageAlt={'linkedin'}/>
                    <BigLogo imageSrc={sqTwitter} imageAlt={'twitter'}/>
                    <BigLogo imageSrc={sqGithub} imageAlt={'github'}/>
                    <BigLogo imageSrc={sqLinkedin} imageAlt={'linkedin'}/>
                    <BigLogo imageSrc={sqTwitter} imageAlt={'twitter'}/>
                    <BigLogo imageSrc={sqGithub} imageAlt={'github'}/>
                    <BigLogo imageSrc={sqLinkedin} imageAlt={'linkedin'}/>
                    <BigLogo imageSrc={sqTwitter} imageAlt={'twitter'}/>
                    <BigLogo imageSrc={sqGithub} imageAlt={'github'}/>
                    <BigLogo imageSrc={sqLinkedin} imageAlt={'linkedin'}/>
                    <BigLogo imageSrc={sqTwitter} imageAlt={'twitter'}/>
                </div>
            </section>

            <section className='projects__section'>
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
                    imageSrc={fist}
                    title={cardData.title}
                    icons={cardData.icons}
                    description={cardData.description}
                    readMoreLink={cardData.readMoreLink}
                    viewProjectLink={cardData.viewProjectLink}
                />
                <Card
                    imageSrc={militaryRobot}
                    title={cardData.title}
                    icons={cardData.icons}
                    description={cardData.description}
                    readMoreLink={cardData.readMoreLink}
                    viewProjectLink={cardData.viewProjectLink}
                />
            </section>

{/* more projects */}
            <section className='more-projects__section'>
                <h2 className='section__heading'>More Projects</h2>
                <div className='carousel_of_cards'>
                    <Sqcard backImage={militaryRobot} cardType={'sqCard'}/>
                    <Sqcard backImage={Alex} cardType={'sqCard'}/>
                    <Sqcard backImage={sadStudent} cardType={'sqCard'}/>
                </div>
            </section>
{/* blog section */}
            <section className='blog__section'>
                <h2 className='section__heading'>BLOG</h2>
                <div className='blog_posts'>
                    <Sqcard backImage={sadStudent} cardType={'sqCard2'}/>
                    <Sqcard backImage={fist} cardType={'sqCard2'}/>
                    <Sqcard backImage={kidEngineer} cardType={'sqCard2'}/>
                </div>
            </section>
{/* interest section */}
            <section className='interests__section'>
                <h2 className='section__heading'>INTERESTS</h2>
                <SlidingImage images={[kidEngineer, robotOnDesk, militaryRobot, fist, sadStudent]}/>
            </section>
            <BackToTopButton />
        </main>
    );
};

export default MainContent;
