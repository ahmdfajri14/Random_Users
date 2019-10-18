import React, {Component} from 'react';
import "./Head.css";

class Head extends Component{
    render(){
        const {sort} = this.props;
        return(
            <header>
                <div>
                    <div className="titlee">
                        <h1>Qoala</h1>
                    </div>

                    <div className="buttons">
                        <button className="smallbutton" onClick={() => {
            sort('color')
        }}>Sort by Color</button>
                        <button className="smallbutton" onClick={() => {
            sort('cities')
        }}>Sort by Cities</button>

                    </div> 
                </div>
            </header>
        )
    }
}
export default Head