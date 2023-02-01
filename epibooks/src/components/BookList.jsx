import { Component } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";
import fantasy from "../data/fantasy.json"
import horror from "../data/horror.json"
import scifi from "../data/scifi.json"
import romance from "../data/romance.json"
import history from "../data/history.json"


class BookList extends Component{

    state ={
        selectedCategory: fantasy,
        search: ""
    };

    render(){
        return(
        <Container fluid>
            <div className="mb-3" >
            <Button className="mr-2" onClick={() => {
                    this.setState({selectedCategory: fantasy})
                }}
                >
                    Fantasy
                </Button>
                <Button className="mr-2"  onClick= {()=>{
                    this.setState({selectedCategory: history})
                }}
                >
                    History
                </Button>
                <Button className="mr-2"  onClick= {()=>{
                    this.setState({selectedCategory: horror})
                }}
                >
                    Horror
                </Button>
                <Button className="mr-2"  onClick= {()=>{
                    this.setState({selectedCategory: scifi})
                }}
                >
                    Sci-fi
                </Button>
                <Button className="mr-2"  onClick= {()=>{
                    this.setState({selectedCategory: romance})
                }}
                >
                    Romance
                </Button>
            </div>
            <div className="mb-3 container">
                <Form>
                    <Form.Control type="text" placeholder="Search Book here!" value={this.state.search}
                    onChange={(e) =>{
                        this.setState({
                            search: e.target.value
                        })
                    }} />
                </Form>
            </div>
                <Row className="d-flex justify-content-center">
                    {this.state.selectedCategory.map((currentBook) => {
                        return(
                            currentBook.title.toLowerCase().includes(this.state.search) && (
                        <Col key={currentBook.asin} xs={12} sm={6}  md={4} lg={3} xl={2}  className="mb-3 d-flex flex-nowrap">
                            < SingleBook {...currentBook} />
                         </Col>)
                        
                        )
                    })}
                </Row>
            </Container>
        )
    }
}

export default BookList