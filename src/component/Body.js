import React, { Component } from 'react'
import Cards from './Card'
import {ButtonToolbar, Button, Container, Row, Col} from 'react-bootstrap'

class Body extends Component {
    render() {
        return (
            <Container>
                <Row>
                <Col>
                <Cards />
                </Col>
                </Row>
                </Container>
        )
    }
}
export default Body