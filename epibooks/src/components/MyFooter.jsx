
import { Container, Row, Col } from "react-bootstrap"
import { GoMarkGithub } from "react-icons/go";
const MyFooter = () =>{

return(
        <Container fluid className="fixed-bottom mt-3 text-center footer-area py-1">
            <Row>
                <Col className="info-area d-flex flex-column justify-content-center align-items-center">
                    <p className="mb-0">Check more here! </p>
                    <div className="mt-0">
                       <span><a href="https://github.com/jannezq"><GoMarkGithub/></a></span>
                    </div>
                </Col>
            </Row>
      </Container>

)

}

export default MyFooter