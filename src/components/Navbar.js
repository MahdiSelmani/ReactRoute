import React from 'react';
import { Navbar, Nav,  Container, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Navbare({tour, setWord}) {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to='/' >Home</Nav.Link>
                            <Nav.Link as={Link} to='/OurTours'>Ours Tours</Nav.Link>
                            <Nav.Link as={Link} to='/AddNewTour'>Add New Tour</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                onChange={(event) => setWord(event.target.value)}
                            />
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navbare;
