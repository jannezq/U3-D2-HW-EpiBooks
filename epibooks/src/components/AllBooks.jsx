import { Component } from "react";
import { Container, Row, Col, Card} from "react-bootstrap";

import bookLibrary from "../data/fantasy.json"

class Allbooks extends Component{
    render(){
        return(
            <Container fluid>
                <Row className="d-flex justify-content-center">
                    {bookLibrary.map((book) =>{
                        return(
                            <Col xs={12} sm={6}  md={4} lg={3} xl={2} key={book.asin} className="mb-3 d-flex flex-nowrap">
                                <Card className="h-100 card-area">
                                    <Card.Img variant="top" src={book.img} className="image-area"/>
                                    <Card.Body className="d-flex flex-column justify-content-between align-items-center">
                                        <Card.Title>{book.title}</Card.Title>
                                        <Card.Text>
                                        €{book.price}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                             </Col>)
                        })
                    }
                </Row>
            </Container>
        )
    }

}


export default Allbooks
