import { Component } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import CommentArea from "./CommentArea";
import SingleBook from "./SingleBook";
import fantasy from "../data/fantasy.json";
import horror from "../data/horror.json";
import scifi from "../data/scifi.json";
import romance from "../data/romance.json";
import history from "../data/history.json";

class BookList extends Component {
  state = {
    selectedCategory: fantasy,
    search: "",
    isError: false,
  };

  render() {
    return (
      <Container fluid>
        <div className="mb-3">
          <Button
            className="mr-2"
            onClick={() => {
              this.setState({ selectedCategory: fantasy });
            }}
          >
            Fantasy
          </Button>
          <Button
            className="mr-2"
            onClick={() => {
              this.setState({ selectedCategory: history });
            }}
          >
            History
          </Button>
          <Button
            className="mr-2"
            onClick={() => {
              this.setState({ selectedCategory: horror });
            }}
          >
            Horror
          </Button>
          <Button
            className="mr-2"
            onClick={() => {
              this.setState({ selectedCategory: scifi });
            }}
          >
            Sci-fi
          </Button>
          <Button
            className="mr-2"
            onClick={() => {
              this.setState({ selectedCategory: romance });
            }}
          >
            Romance
          </Button>
        </div>
        <div className="mb-3 container">
          <Form>
            <Form.Control
              type="text"
              placeholder="Search Book here!"
              value={this.state.search}
              onChange={(e) => {
                this.setState({
                  search: e.target.value,
                });
                console.log(
                  "searching for book that is title: ",
                  this.state.search
                );
              }}
            />
          </Form>
        </div>

        {/* using "filter" method 
                    ---filters through selected category of books
                    ---it returns the title of the book that has been filtered 
                    ---that is been inputed in the search form 
                    ---then maps through the whole array and then returns 
                    ---the card from singlebook*/}
        <Row>
          <Col md={8}>
            <Row className="d-flex justify-content-center">
              {this.state.selectedCategory
                .filter((currenBook) => {
                  return currenBook.title
                    .toLowerCase()
                    .includes(this.state.search.toLowerCase());
                })
                .map((currenBook) => {
                  return (
                    <Col
                      key={currenBook.asin}
                      xs={12}
                      md={4}
                      xl={3}
                      className="mb-3 d-flex flex-nowrap"
                    >
                      <SingleBook {...currenBook} />
                    </Col>
                  );
                })}
            </Row>
          </Col>
          <Col md={4}>
            {this.state.commentsOnLoad && (
              <CommentArea idAsin={this.props.asin} />
            )}
          </Col>
        </Row>

        {/* <Row className="d-flex justify-content-center">
                    {this.state.selectedCategory.map((currentBook) => {
                        return(
                            currentBook.title.toLowerCase().includes(this.state.search) && (
                        <Col key={currentBook.asin} xs={12} sm={6}  md={4} lg={3} xl={2}  className="mb-3 d-flex flex-nowrap">
                            < SingleBook {...currentBook} />
                         </Col>)
                        )
                    })}
                </Row> */}
      </Container>
    );
  }
}

export default BookList;
