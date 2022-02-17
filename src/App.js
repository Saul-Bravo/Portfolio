import React from 'react'
import classes from './App.module.css';
import Header from './Components/Header';
import Technologies from './Components/Technologies';

class App extends React.Component {
  render(){
    return (
      <div className={classes.App}>
        <Header/>
        <Technologies/>
      </div>
    );
  }
}

export default App;
