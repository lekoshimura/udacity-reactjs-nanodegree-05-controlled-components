import React from 'react';

class FormCreate extends React.Component {
  state = { value: '' };

  inputIsEmpty = () => {
    return this.state.value === '';
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    this.props.addItem(this.state.value)
  };

  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <input
          type="text"
          placeholder="Enter New Item"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button disabled={this.inputIsEmpty()}>Add</button>
      </form>
    )
  };
};

export default FormCreate;