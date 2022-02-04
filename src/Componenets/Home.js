import React, { useEffect, useState } from 'react';
import '../styling/home.css';
import { Navbar, Container, NavDropdown, Nav, FormControl, Button, Card } from 'react-bootstrap'

function Home() {

    const [item, setItem] = useState([]);
    const [status, setStatus] = useState(false);
    
    const apiCall = () => {
        fetch('http://www.mocky.io/v2/5ba8efb23100007200c2750c')
        .then(response => response.json())
        .then(data => setItem(data));
        console.log(item)
    }


    useEffect(() => {
       apiCall()
    },[])




  return <div>
            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <FormControl
                    placeholder="Search"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    />
                    <Nav.Link className="search-icon">
                    <i class="fa fa-search" aria-hidden="true"></i>
                    </Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            <div className="card-wrapper">
                <Container className="card-div">
                    {
                        
                        item.map((a) => {
                            return (
                                <Card  
                                className="card"
                                style={{ width: '18rem' }}
                                >
                                    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729512__340.jpg" />
                                    <Card.Body>
                                        <Card.Title>Card Id: {a.id}</Card.Title>
                                        <Card.Text>
                                        <h5>Name: {a.name}</h5>
                                        <h5>Item: {a.item}</h5>
                                        <h5>Address: {a.address}</h5>
                                        <h5>PinCode: {a.pincode}</h5>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            )
                        })
                    }
                </Container>
            </div>
        </div>;
}

export default Home;
