import React, { Component } from 'react'
import {Card, Row, Col} from 'react-bootstrap'
import axios from 'axios'
class Cards extends Component {
    constructor(){
        super()
        this.state = {
            loading: <img alt='loading' style={{alignContent:'center'}} src='https://loading.io/spinners/spin/lg.ajax-spinner-gif.gif'/>,
            users: []
        }
    }
    componentDidMount(){
        var url = 'https://randomuser.me/api/?results=100'
        axios.get(url)
        .then((x)=>{
            this.setState({
                loading: '',
                users: x.data.results
            })
            console.log(x)
        })
        .catch((x)=>{console.log(x)})
    }
    render() {
        var profile = this.state.users.map((val,i)=>{
            var photo = val.picture.thumbnail
            var age = val.dob.age
            var title = val.name.title
            var firstName = val.name.first
            var lastName = val.name.last
            var city = val.location.city
            var state = val.location.state
            var postCode = val.location.postcode
            var email = val.email
            if (age < 21){
                return(
                    <Card style={{ width: '18rem', margin:'auto', backgroundColor:'red'}} key={i}>
                    <Card.Img variant="top" src={photo} style={{ width:'10em', margin:'15px', display:'block', marginLeft:'auto', marginRight:'auto'}}/>
                    <Card.Body style={{backgroundColor:'red'}}>
                      <Card.Title>{title} {firstName} {lastName}</Card.Title>
                      <p>{age}</p>
                      <Card.Text>
                        {city}, {state}, {postCode}
                        <br/>
                        {email}
                </Card.Text>
                    </Card.Body>
                  </Card> 
                )
            } else if (age > 56) {
        return (
<Card style={{ width: '18rem', margin:'auto', backgroundColor:'blue'}} key={i} >
        <Card.Img variant="top" src={photo} style={{ width:'10em', margin:'15px', display:'block', marginLeft:'auto', marginRight:'auto'}}/>
        <Card.Body >
          <Card.Title>{title} {firstName} {lastName}</Card.Title>
          <p>{age}</p>
          <Card.Text>
            {city}, {state}, {postCode}
            <br/>
            {email}
    </Card.Text>
        </Card.Body>
      </Card>
        )
            } else {
                return (
                    <Card style={{ width: '18rem', margin:'auto', backgroundColor:'green'}} key={i} >
                            <Card.Img variant="top" src={photo} style={{ width:'10em', margin:'15px', display:'block', marginLeft:'auto', marginRight:'auto'}}/>
                            <Card.Body >
                              <Card.Title>{title} {firstName} {lastName}</Card.Title>
                              <p>{age}</p>
                              <Card.Text>
                                {city}, {state}, {postCode}
                                <br/>
                                {email}
                        </Card.Text>
                            </Card.Body>
                          </Card>
                            )
            }
    })
    return(
        <div>
            {this.state.loading}
            <Row sm='true'> 
    {profile}
  </Row>
        </div>
    )
    }
}
export default Cards