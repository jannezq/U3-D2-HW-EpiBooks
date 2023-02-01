import { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import SingleBook from "./SingleBook";
import fantasy from "../data/fantasy.json"
import horror from "../data/horror.json"
import scifi from "../data/scifi.json"
import romance from "../data/romance.json"
import history from "../data/history.json"


class BookList extends Component{

    state ={

        selectedCategory: fantasy,

    };

    render(){
        return(
        <Container fluid>
                <Button onClick={() => {
                    this.setState({selectedCatergory: fantasy})
                }}
                >
                    Fantasy
                </Button>
                <Button onClick= {()=>{
                    this.setState({selectedCatergory: history})
                }}
                >
                    History
                </Button>
                <Button onClick= {()=>{
                    this.setState({selectedCatergory: horror})
                }}
                >
                    Horror
                </Button>
                <Button onClick= {()=>{
                    this.setState({selectedCatergory: scifi})
                }}
                >
                    Sci-fi
                </Button>
                <Button onClick= {()=>{
                    this.setState({selectedCatergory: romance})
                }}
                >
                    Romance
                </Button>
                <Row className="d-flex justify-content-center">
                    {this.state.selectedCategory.map((currentBook) => {
                        return(
                        <Col key={currentBook.asin} xs={12} sm={6}  md={4} lg={3} xl={2}  className="mb-3 d-flex flex-nowrap">
                           < SingleBook {...currentBook} />
                        </Col>
                        )
                    })}
                </Row>
            </Container>
        )
    }
}

export default BookList