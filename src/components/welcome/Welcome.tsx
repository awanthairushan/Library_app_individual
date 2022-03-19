import React from 'react';
import {Col,Row,Image} from 'react-bootstrap';
import WelcomeImage from '../../assets/images/welcome.jpg';

const Welcome: React.FC = () => {
    return (
        <React.Fragment>
          <Row>
            <Col>
                <h1 className="text-center heading mt-2 mb-3">My Library</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="px-0">
                <Image className="img-fluid" src={WelcomeImage}/>
            </Col>
          </Row>
          <Row>
            <Col className="text-end mt-2 pe-lg-5">
               Photo by <a href="https://unsplash.com/photos/ajE5goOGzZc">Anna Hunko </a>
               on <a href="https://unsplash.com/">Unsplash</a>
            </Col>
          </Row>
        </React.Fragment>
    );
}

export default Welcome;