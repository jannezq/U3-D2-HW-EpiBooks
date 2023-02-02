import { Component } from "react";
import AddComments from "./AddComments";
import CommentsList from "./CommentsList";
import { Spinner, Alert } from "react-bootstrap";

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: true,
    errorLoad: false,
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
        // console.log(commentsData);
        this.setState({
          isLoading: false,
          comments: commentsData,
        });
      } else {
        this.setState({
          isLoading: false,
          errorLoad: true,
        });
      }
    } catch (error) {
      console.log(error);
      this.setState({
        isLoading: false,
        errorLoad: true,
      });
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
          {this.state.isLoading && (
            <Spinner animation="border" variant="info" />
          )}
          {this.state.errorLoad && (
            <Alert variant="danger">Aww snap, we got an error!😨</Alert>
          )}

          <AddComments asin={this.props.idAsin} />
          <CommentsList comments={this.state.comments} />
        </div>
      </>
    );
  }
}

export default CommentArea;
