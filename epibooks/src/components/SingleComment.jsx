import { Component } from "react";

import { ListGroup, Button } from "react-bootstrap";

class SingleComment extends Component {
  deleteComment = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.coms._id,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RiYjZlMTUwMWZlODAwMTU2MGMyMjIiLCJpYXQiOjE2NzUzNDM1ODYsImV4cCI6MTY3NjU1MzE4Nn0.Yw4QgVfOVXsvwAmz1kLZkHw2gXs7Exzf85QVQXGT1oc",
          },
        }
      );
      if (response.ok) {
        console.log(response);
      } else {
        alert("error happening");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <ListGroup.Item className="text-left">
        {this.props.coms.comment} ~{" "}
        <span className="">{this.props.coms.rate}/5</span>
        <Button
          className="ml-auto"
          variant="danger"
          onClick={(e) => {
            e.target.closest(".list-group-item").remove();
            this.deleteComment();
          }}
        >
          X
        </Button>
      </ListGroup.Item>
    );
  }
}

export default SingleComment;
