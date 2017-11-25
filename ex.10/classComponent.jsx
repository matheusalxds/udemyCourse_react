import React,  { Component } from 'react'; //eslint-disable-line

export default class classComponent extends Component {
  renderComponent() {
    return (
      <h3> {this.props.name} </h3>
    );
  }

  render() {
    return (
      <div>
        { this.renderComponent() }
      </div>
    );
  }
}
