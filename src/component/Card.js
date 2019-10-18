import React, { Component } from 'react'
import axios from 'axios'
import "./Card.css"

class Cards extends Component {
    constructor(){
        super()
        this.state = {
            loading: false,
            users: [],
            currentDataAmount: 10,
            retrieveData: false
        }
    }

    addMoreData(){
        if(this.state.currentDataAmount != 100){
            this.setState({
                currentDataAmount: this.state.currentDataAmount + 10
            });
        };
    }

    //function to handle if user scroll to the end of page on mobile
    handleScroll = () => {
        if((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
            this.setState({
                retrieveData: this.state.currentDataAmount == 100 ? false : true
            })
            setTimeout(() => {
                this.addMoreData();
                this.setState({
                    retrieveData: false
                })
            }, 1000);
        }
    }



    componentDidMount(){

        window.addEventListener("scroll", this.handleScroll); //event listener if user sroll

        this.setState({
            loading: true
        });

        var url = 'https://randomuser.me/api/?results=100'
        axios.get(url)
        .then((x)=>{
            this.setState({
                loading: false,
                users: x.data.results
            });
        })
        .catch((x)=>{
            this.setState({
                loading: false
            });
        })
    }

    //function to check color based on age
    checkAge = (age) => {
        return age >= 56 ? 'blue' : age < 56 && age > 21 ? 'green' : age <= 21 ? 'red' : '';
    }

    render() {
        const {sortByCities, sortByColor} = this.props; //receive props from parent
        var dataFinal= this.state.users; //assign the state to local variable to be processed
        
        // check if user filter
        if(sortByCities){
             dataFinal.sort((a,b) => {
                if(a.location.city < b.location.city){
                    return -1;
                }
                if(a.location.city > b.location.city){
                    return 1;
                }
                return 0;
            });
        }
        else if(sortByColor){
            dataFinal.sort((a,b) => {
                return a.dob.age - b.dob.age
            });
        }
        // end of user filter check

        // dataFinal.map((item, index) => {})

        // prepare the data to be rendered
        var profile = dataFinal.map((val,i)=>{
            if(i <= this.state.currentDataAmount){
            var photo = val.picture.thumbnail
            var age = val.dob.age
            var title = val.name.title
            var firstName = val.name.first
            var lastName = val.name.last
            var city = val.location.city
            var state = val.location.state
            var postCode = val.location.postcode
            var email = val.email
                return(
                    <div className="cardCustom" key={i} style={{backgroundColor: this.checkAge(age), color: age == 21 || age == 56 ? 'black' : 'white'}}>
                        <img src={photo} style={{width: "100px", height: "auto"}}/>
                        <br />
                        <p>{title} {firstName} {lastName}</p>
                        <p>{`${city}, ${state}, ${postCode}`}</p>
                        <br />
                        {age}
                        <br />
                        {email}
                  </div>
                )
            }
        });
        // end of data preparing

    return(
        <React.Fragment>
            <h1 style={{textAlign: "center", margin: "auto", width: "auto"}}>{this.state.loading && 'Please wait...'}</h1>
        <div className="responsiveContainer">
            {profile}
            <p style={{color: "white", textAlign: "center"}}>{this.state.retrieveData ? 'Loading 10 more data..' : ''}</p>
            <p style={{color: "white", textAlign: "center"}}>{this.state.currentDataAmount == 100 && 'No more data to load'}</p>
        </div>
        </React.Fragment>
    )
    }
}
export default Cards