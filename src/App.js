import React from 'react';
import Head from './component/Head'
import Card from './component/Card'

class App extends React.Component {

  state = {
    sortByCities: false,
    sortByColor: false
  }


  sort = (val) => {
    if(val == 'cities'){
      this.setState({
        sortByCities: this.sortByCities ? false : true,
        sortByColor: false
      });
    }
    else{
      this.setState({
        sortByColor: this.sortByColor ? false : true,
        sortByCities: false
      })
    }
  }
  
  render(){
    
  return (
    <div style={{backgroundColor:'orange'}}>
      <Head sort={this.sort}/>
      <Card sortByCities={this.state.sortByCities} sortByColor={this.state.sortByColor}/>
      </div>
  );
  }
}

export default App;
