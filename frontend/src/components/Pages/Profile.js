import React from 'react';
import {  Row, Col, ListGroup, Card, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../JS/actions/userActions';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Profile = ({history}) => {
    const dispatch = useDispatch();
    const  user = useSelector(state => state.userReducer.user)

    const { id } = useParams();
     dispatch(getUser(id))
    return (
        <>    
        <Row>    
      <Col md={4}>
        <h2>Profile</h2>
        <Card>
        <Card.Img variant="top" style={{width: "50%"}} src="https://www.guichetemplois.gc.ca/themes-jb/images/match/profile-image-add.svg" />
          
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Row>
                <Col>Name:</Col>
                <Col>
                  <strong>{user.firstName}</strong> 
                  <strong>{user.lastName}</strong>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Email:</Col>
                <Col>
                  <strong>{user.email}</strong>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Address:</Col>
                <Col>
                  <strong>{user.address}</strong>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Phone:</Col>
                <Col>
                  <strong>{user.phone}</strong>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Role:</Col>
                <Col>
                  <strong>{user.role}</strong>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
      </Row>
        <Row style={{margin: 15}}>
            <Link to={`/edit/${user._id}`}> 
                <Button variant="success" onClick={() => dispatch(getUser(user._id))}>
                    Edit Profile</Button> 
               </Link>
        </Row>
    
    </>
    );
};

export default Profile;