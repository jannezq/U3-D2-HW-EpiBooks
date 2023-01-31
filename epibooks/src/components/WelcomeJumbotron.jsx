import { Jumbotron, Button } from "react-bootstrap"



const WelcomeJumbotron = () =>{

return(
    <Jumbotron className="welcome-area" style={{ backgroundImage: `url("https://www.incimages.com/uploaded_files/image/1920x1080/getty_655998316_2000149920009280219_363765.jpg")`, backgroundSize: 'cover' }}>
  <div className="d-flex flex-column ">
    <h1>EpiBooks bookstore!</h1>
  <p>
    Look at the variety of books available for you!
  </p>
  <p>
    <Button bsStyle="primary">Click here!</Button>
  </p>
  </div>
  
</Jumbotron>
)

}

export default WelcomeJumbotron