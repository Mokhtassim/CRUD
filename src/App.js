import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      items : [],
      dataLoad : false 
    }
  }
componentDidMount () {
  fetch('https://api.publicapis.org/entries')
  .then((item) => item.json())
  .then(data => {
    console.log(data.entries[0]);
    this.setState({
      items: data.entries,
      dataLoad : true
    })
  })
}
  render(){
    const { dataLoad, items } = this.state;
    return (
      <div className="App">
        <ul>
         {
        items.slice(0, 10).map((data) => (
            <li>API: {data.API}</li>
          ))
         } 
        </ul>
      </div>
    );
  }
  
}

export default App;
