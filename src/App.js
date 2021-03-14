import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormCreate from './FormCreate';

class App extends React.Component {
  state = {
    value: '',
    items: [],
  };

  addItem = newValue => {
    this.setState(oldState => ({
      items: [...oldState.items, newValue],
    }));
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        <FormCreate
          value={this.state.value}
          onFormChanged={this.handleChange}
          addItem={this.addItem}
        />
        <button onClick={this.deleteLastItem} disabled={this.noItemsFound()}>
          Delete Last Item
        </button>

        <p className="items">Items</p>
        <ol className="item-list">
          {this.state.items.map((item, index) => <li key={index}>{item}</li>)}
        </ol>
      </div>
    );
  }
}

export default App;