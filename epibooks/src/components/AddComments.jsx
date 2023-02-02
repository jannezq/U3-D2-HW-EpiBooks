import { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

class AddComments extends Component {
  state = {
    commenting: {
      comment: "",
      rate: "",
      elementId: this.props.asin,
    },
  };

  addingComment = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(this.state.commenting),
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RiYjZlMTUwMWZlODAwMTU2MGMyMjIiLCJpYXQiOjE2NzUzNDM1ODYsImV4cCI6MTY3NjU1MzE4Nn0.Yw4QgVfOVXsvwAmz1kLZkHw2gXs7Exzf85QVQXGT1oc",
            "Content-Type": "application/json",
          },
        }
      );
      //   console.log("this is the book id", this.props.asin);
      if (response.ok) {
        this.setState({
          ...this.state,
          commenting: {
            comment: "",
            rate: "0",
          },
        });
      } else {
        alert("Cannot sent");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <Form
          className="my-3"
          onSubmit={(e) => {
            e.preventDefault();
            this.addingComment();
          }}
        >
          <FormControl
            placeholder="comment....."
            aria-label="comment"
            value={this.state.commenting.comment}
            onChange={(e) => {
              //   console.log("commenting: ", e.target.value);

              this.setState({
                ...this.state,
                commenting: {
                  ...this.state.commenting,
                  comment: e.target.value,
                },
              });
            }}
          />
          <FormControl
            placeholder="rate from 1-5"
            aria-label="rate"
            value={this.state.commenting.rate}
            onChange={(e) => {
              //   console.log("commenting: ", e.target.value);
              this.setState({
                commenting: {
                  ...this.state.commenting,
                  rate: e.target.value,
                },
              });
            }}
          />
          <Button type="submit">ADD</Button>
        </Form>
      </div>
    );
  }
}

export default AddComments;
