import React, { Component } from 'react';

//Screen
import Main from './src/Main'

//Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './src/Redux/Reducer'

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

class App extends Component {
  render(){
    return(
      <Provider store={store}> 
        <Main /> 
      </Provider>
    
    );
  }  
}

export default App
