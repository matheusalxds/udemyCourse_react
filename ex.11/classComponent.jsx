import React,  { Component } from 'react'; //eslint-disable-line

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.initialValue,
    };
  }

  sum(delta) {
    this.setState({ value: this.state.value + delta });
  }

  renderComponent() {
    return (
      <div>
        <div>
          <h1>{this.props.label}</h1>
          <h1>{this.state.value}</h1>
        </div>
        <button onClick={() => this.sum(-1)}> Dec </button>
        <button onClick={() => this.sum(1)}> Sum </button>
      </div>
    );
  }

  render() {
    return (
      this.renderComponent()
    );
  }
}
