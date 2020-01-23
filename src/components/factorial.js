import React from 'react';

class Factorial extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0, factorial: 0 };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num === 0) 
        return 1;
    else {
        return (num * this.factorialize(num - 1));
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const factorial = this.factorialize(this.state.value);
    this.setState({ factorial: factorial });
  }

  render() {
    return (
      <div>
        <h1>Factorial Calculator</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="number" placeholder="Enter a number..." onChange={this.handleChange} value={this.state.value}/>
          <br />
          <button>Calculate Factorial</button>
        </form>
        <h2>Factorial: {this.state.factorial}</h2>
      </div>
    );
  }
}

export default Factorial;