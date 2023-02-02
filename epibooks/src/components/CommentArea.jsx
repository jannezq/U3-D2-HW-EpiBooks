import { Component } from "react";
import CommentsList from "./CommentsList";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  fetchComments = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.idAsin,
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RiYjZlMTUwMWZlODAwMTU2MGMyMjIiLCJpYXQiOjE2NzUzNDM1ODYsImV4cCI6MTY3NjU1MzE4Nn0.Yw4QgVfOVXsvwAmz1kLZkHw2gXs7Exzf85QVQXGT1oc",
          },
        }
      );
      if (response.ok) {
        let commentsData = await response.json();
        console.log(commentsData);
        this.setState({
          comments: commentsData,
        });
      } else {
        alert("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchComments();
  }

  render() {
    //this.fetchComments();

    return (
      <>
        <div>
          <CommentsList comments={this.state.comments} />
        </div>
      </>
    );
  }
}

export default CommentArea;
