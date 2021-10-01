import React from 'react'
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../../App.css'

const Contact = () => {

    const handleSendMail = () => {
        alert("Message send with success")
    }
    return (
        <div>
            <Container>
                <h3 style={{color: "#e53637", textAlign: "center", margin: "40px 0px"}}>Contact Us</h3>
                <Row>
                <Col>
                <div className="contact-text">
                <p>  
                Do you want help? Our team is at your disposal to answer your questions and requests. 
                From customer service to experts in our company, our teams are always at your disposal. 
                You can contact us by email or phone.
                </p>
                </div>
                <div className="contact-text">
                <ul> 
                <li>
                <i className="fa fa-home"></i>
                <span>Jasmins building first floor City center ، Nabeul 8060</span>
                </li> 
                <li>
                <i className="fa fa-phone"></i>
                <span>Phone: 72488655 / Fax: 72113113</span>
                </li> 
                <li>
                <i className="fa fa-envelope"></i>
                <span><Link to="#">admin.bestshop@gmail.com</Link></span>
                </li> 
                </ul>
                </div>
                </Col>
                <Col>
                <Form onSubmit={handleSendMail}>
                <h2 class="title">Send your comments</h2>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Enter your Comment" required/>
                    </Form.Group>
                    <Button type="submit" variant="dark">Send Email</Button>
                </Form>
                </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Contact
