import { Component } from "react";
import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

class CommentsList extends Component {
  render() {
    return (
      <>
        <h3 className="text-left">Reviews:</h3>
        <ListGroup className="my-4">
          {this.props.comments.map((c) => {
            return <SingleComment key={c._id} coms={c} />;
          })}
        </ListGroup>
      </>
    );
  }
}

export default CommentsList;
