import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export function Home( promps ) {
    document.title = "Best wine of the city"
    return(
        <Container>
            <Row>
                <Col>
                    <h2>Home</h2>
                </Col>
            </Row>
        </Container>
    )
}