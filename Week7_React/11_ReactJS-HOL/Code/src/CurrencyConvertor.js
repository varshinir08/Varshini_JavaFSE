import React, { Component } from 'react';

class CurrencyConvertor extends Component {
  constructor() {
    super();
    this.state = {
      rupees: '',
      euro: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ rupees: event.target.value });
  };

  handleSubmit = () => {
    const euroRate = 0.011; 
    const euroValue = this.state.rupees * euroRate;
    this.setState({ euro: euroValue.toFixed(2) });
  };

  render() {
    return (
      <div>
        <h2>💱 Currency Convertor</h2>
        <label>Enter Rupees: </label>
        <input
          type="number"
          value={this.state.rupees}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleSubmit} style={{ marginLeft: '10px' }}>
          Convert
        </button>
        <p>Converted Value: € {this.state.euro}</p>
      </div>
    );
  }
}

export default CurrencyConvertor;
