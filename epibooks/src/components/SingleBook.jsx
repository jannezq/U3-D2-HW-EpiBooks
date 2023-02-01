import { Component } from "react"
import {  Card } from "react-bootstrap"

class SingleBook extends Component{

    state = {
        selectedBook: false
    }
render() {
    return(
        <Card className="h-100 card-area" onClick={() => {
            this.setState({ selectedBook: true})
            console.log('Clicked!', this.props.title)
            
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