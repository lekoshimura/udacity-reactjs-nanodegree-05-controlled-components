import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormCreate from './FormCreate';
import ButtonDelete from './ButtonDelete';
import ListItems from './ListItems';

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
          addItem={this.addItem} />
        <ButtonDelete 
          deleteLastItem={this.deleteLastItem}
          noItemsFound={this.noItemsFound} />
        <ListItems
          items={this.state.items} />
      </div>
    );
  }
}

export default App;