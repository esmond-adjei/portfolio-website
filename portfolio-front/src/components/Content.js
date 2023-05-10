import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import Profile from './Profile';
// import Projects from './Projects';
// import SkillsTools from './SkillsTools';
// import BlogPosts from './BlogPosts';
// import Interests from './Interests';

function MainContent() {
    return (
        <div className='main-content'>
            <div className='profile__column'>
                <p>profile content</p>
            </div>

            <div className='content__column'>
                <div className='content__projects'>
                    <p>PROJECTS</p>
                </div>
                <div className='content__skills'>
                    <p>SKILLS</p>
                </div>
                <div className='content__blog'>
                    <p>BLOG</p>
                </div>
                <div className='content__interests'>
                    <p>INTERESTS</p>
                </div>
            </div>
        </div>
    );
};

export default MainContent;

        // <Container fluid>
        //     <Row>
        //         <Col md={3}>
        //             <p>Profile</p>
        //         </Col>
        //         <Col md={9}>
        //             <Row>
        //                 <Col>
        //                     <p>Projects </p>
        //                 </Col>
        //             </Row>
        //             <Row>
        //                 <Col md={6}>
        //                     <p>Skills and Tools</p>
        //                 </Col>
        //                 <Col md={6}>
        //                     <p>Blog Posts</p>
        //                 </Col>
        //             </Row>
        //             <Row>
        //                 <Col>
        //                     <p>Interests</p>
        //                 </Col>
        //             </Row>
        //         </Col>
        //     </Row>
        // </Container>