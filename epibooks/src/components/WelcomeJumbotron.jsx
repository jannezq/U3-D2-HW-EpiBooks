import { Jumbotron, Button } from "react-bootstrap"


const WelcomeJumbotron = () =>{

return(
    <Jumbotron>
  <h1>EpiBooks bookstore!</h1>
  <p>
    Look at the variety of books available for you!
  </p>
  <p>
    <Button bsStyle="primary">Click here!</Button>
  </p>
</Jumbotron>
)

}

export default WelcomeJumbotron