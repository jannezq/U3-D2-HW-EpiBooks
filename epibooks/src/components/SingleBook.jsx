import { Component } from "react"
import {  Card } from "react-bootstrap"
import "../../src/App.css";

class SingleBook extends Component{

    state = {
        selectedBook: false
    }
render() {
    return(
        <Card className={ this.state.selectedBook ? "h-100 selected card-area" : "card-area" }   onClick={() => {
            if(this.state.selectedBook === false){
                 this.setState({ selectedBook: true})
                 console.log('Clicked!', this.props.title)
            } else{
                this.setState({ selectedBook: false})
                console.log("You unselected the book", this.props.title)
            }

        }}

        >
            <Card.Img variant="top" src={this.props.img} className="image-area"/>
            <Card.Body className="d-flex flex-column justify-content-between align-items-center">
                   <Card.Title>{this.props.title}</Card.Title>
            </Card.Body>
        </Card>
)
}


}

export default SingleBook