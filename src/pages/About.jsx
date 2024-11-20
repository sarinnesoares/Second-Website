import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

export function About( promps ) {
    document.title = "Who we are"
    return(
        <Container>
            <Row>
                <Col>
                    <h2>About</h2>
                    
                </Col>
            </Row>
        </Container>
    )
}