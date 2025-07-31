import React, { Component } from 'react';
import CurrencyConvertor from './CurrencyConvertor';

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
 
  increment = () => {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
    this.sayHello();
  };

   sayHello = () => {
    console.log('Hello! This is the increment button.');
  };

   decrement = () => {
    this.setState(prevState => ({ counter: prevState.counter - 1 }));
  };

   sayWelcome = (message) => {
    alert(message);
  };

   handleSyntheticEvent = (event) => {
    console.log(event);  
    alert('I was clicked');
  };

  render() {
    return (
      <div style={{ padding: '20px' }}>
        <h1>React Event Handling Example</h1>
        <h2>Counter: {this.state.counter}</h2>

         <button onClick={this.increment}>Increment</button>

         <button onClick={this.decrement} style={{ marginLeft: '10px' }}>
          Decrement
        </button>

        <br /><br />

         <button onClick={() => this.sayWelcome('Welcome to React!')}>
          Say Welcome
        </button>

        <br /><br />

         <button onClick={this.handleSyntheticEvent}>OnPress</button>

        <br /><br />
        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
