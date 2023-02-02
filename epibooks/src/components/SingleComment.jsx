import { Component } from "react";

import { ListGroup } from "react-bootstrap";

class SingleComment extends Component {
  render() {
    return (
      <ListGroup.Item className="text-left">
        {this.props.coms.comment} ~{" "}
        <span className="">{this.props.coms.rate}/5</span>
      </ListGroup.Item>
    );
  }
}

export default SingleComment;
