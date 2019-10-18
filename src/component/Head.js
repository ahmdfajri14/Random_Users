import React, {Component} from 'react'
import { Container, Row, Col, Button, ButtonToolbar } from 'react-bootstrap'

class Head extends Component{
    render(){
        return(
            <Row>
    <Col sm={8}>
    <h1 style={{color:'white', marginLeft:'30px'}}>Qoala</h1>
    </Col>
    <Col sm={4}>
    <ButtonToolbar style={{marginTop:'10px'}}>
                    <Button variant="light" style={{marginRight:'10px'}}>Color</Button>
                    <Button variant="light">Cities</Button>
                </ButtonToolbar>
    </Col>
  </Row>
        )
    }
}
export default Head