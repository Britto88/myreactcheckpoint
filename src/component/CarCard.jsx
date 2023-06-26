import React from "react";
import '../App.css';
import Button from 'react-bootstrap/Button';
import firstImg from '../images/image1.webp';
import secImg from "../images/image2.webp";
import thiImg from "../images/image3.avif";
import { Card } from "react-bootstrap";


const CarCard = () => {
    return(
        <>
            <div className="card-container">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={firstImg} alt="toyota" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={secImg} alt="toyota" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={thiImg} alt="toyota" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            </div>
            
            
        </>
    )
}


export default CarCard;