import CommentArea from "./CommentArea";
import { Component } from "react";
import { Card, Row, Col } from "react-bootstrap";
import "../../src/App.css";
import "./componentCSS.css";

class SingleBook extends Component {
  state = {
    selectedBook: false,
    commentsOnLoad: false,
  };
  render() {
    return (
      <>
        <div className="d-flex flex-column">
          <Row>
            <Col>
              <Card
                className={
                  this.state.selectedBook ? "selected card-area" : "card-area"
                }
                onClick={() => {
                  if (this.state.selectedBook === false) {
                    this.setState({ selectedBook: true });
                    this.setState({ commentsOnLoad: true });
                    //  console.log('Clicked!', this.props.title)
                  } else {
                    this.setState({ selectedBook: false });
                    this.setState({ commentsOnLoad: false });
                    // console.log("You unselected the book", this.props.title)
                  }
                }}
              >
                <Card.Img
                  variant="top"
                  src={this.props.img}
                  className="image-area"
                />
                <Card.Body className="d-flex flex-column justify-content-between align-items-center">
                  <Card.Title>{this.props.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              {this.state.commentsOnLoad && (
                <CommentArea idAsin={this.props.asin} />
              )}
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default SingleBook;
