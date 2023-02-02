import { Component } from "react";
import { ListGroup } from "react-bootstrap";

class CommentsList extends Component {
  render() {
    return (
      <>
        <h3>Testing</h3>
        <ListGroup className="my-4">
          {this.props.comments.map((comments) => {
            return (
              <ListGroup.Item key={comments._id}>
                {comments.comment}
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </>
    );
  }
}

export default CommentsList;
