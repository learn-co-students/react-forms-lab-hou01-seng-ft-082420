import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
      counter: 0
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleCounter = () => {
    this.setState(previousState => {
      return {
        counter: previousState.counter + 1
      }
    })
  }

  render() {
      let charNumber = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input onKeyPress = {this.handleCounter} type="text" name="message" id="message" value = {this.state.message} onChange = {(event) => this.handleChange(event)}/>
        {charNumber}
        <button>{this.state.counter}</button>
      </div>
    );
  }
}

export default TwitterMessage;
