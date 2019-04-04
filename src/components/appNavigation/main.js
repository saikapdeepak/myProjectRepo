import React, { Component } from 'react';
import Header from './header';
import Homepage from './homepage';
import store from '../../store';
import { Provider } from 'react-redux';


class Main extends Component {
  render() {
    return (
        <Provider store = {store}>
            <div className="App">
                 <Header /> 
                 <Homepage />
            </div>
       </Provider>
    )
  }
}

export default Main;