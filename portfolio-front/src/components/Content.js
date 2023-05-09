import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import Profile from './Profile';
// import Projects from './Projects';
// import SkillsTools from './SkillsTools';
// import BlogPosts from './BlogPosts';
// import Interests from './Interests';

function MainContent() {
    return (
        <Container fluid>
            <Row>
                <Col md={3}>
                    <p>Profile</p>
                </Col>
                <Col md={9}>
                    <Row>
                        <Col>
                            <p>Projects </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <p>Skills and Tools</p>
                        </Col>
                        <Col md={6}>
                            <p>Blog Posts</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>Interests</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default MainContent;
