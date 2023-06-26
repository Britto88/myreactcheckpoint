// import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import CarCard from './component/CarCard';





function App() {
  return (
    <>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">My App</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <h1 className='car-header'>SHOWCASING CARS <br />& DESCRIPTION</h1>

        
      </div>
      <CarCard />
    </>
    
  );
}

export default App;