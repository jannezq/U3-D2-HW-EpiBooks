import { Container, Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";
import bookLibrary from "../data/fantasy.json"


const BookList = () =>{
    return(
        <Container fluid>
                <Row className="d-flex justify-content-center">
                    {bookLibrary.map((book) =>{
                        return(
                        <Col xs={12} sm={6}  md={4} lg={3} xl={2}  className="mb-3 d-flex flex-nowrap">
                           < SingleBook {...book} />
                        </Col>
                        )
                        })
                    }
                </Row>
            </Container>
    )
}

export default BookList