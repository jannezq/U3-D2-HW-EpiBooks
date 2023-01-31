import { Component } from "react";
import { Container, Row, Col, Card} from "react-bootstrap";
import bookLibrary from "../data/horror.json"

class Allbooks extends Component{
    render(){
        return(
            <Container>
                <Row>
                    {bookLibrary.map((book) =>{
                        return(
                            <Col key={book.asin} className="mb-3">
                                <Card className="h-100 card-area">
                                    <Card.Img variant="top" src={book.img} className="image-area"/>
                                    <Card.Body className="d-flex flex-column justify-content-center align-items-between">
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
