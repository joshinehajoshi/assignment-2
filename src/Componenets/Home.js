import React, { useEffect, useState } from 'react';
import '../styling/home.css';
import { Navbar, Container, NavDropdown, Nav, FormControl, Button } from 'react-bootstrap'

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
            <div>
                <Container>
                <Button onClick={apiCall}>Okay</Button>
                </Container>
            </div>
        </div>;
}

export default Home;
