
import {  Card } from "react-bootstrap"

const SingleBook = (props) =>{

return(
        <Card className="h-100 card-area" key={props.asin}>
            <Card.Img variant="top" src={props.img} className="image-area"/>
            <Card.Body className="d-flex flex-column justify-content-between align-items-center">
                   <Card.Title>{props.title}</Card.Title>
            </Card.Body>
        </Card>
)

}

export default SingleBook