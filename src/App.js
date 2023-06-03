import React, { Component } from 'react'
import TodoItem from "./components/todoItem/TodoItem";
import AddItem from "./components/addItem/AddItem";

import './App.css'
class App extends Component {

  state = {
    items: [
      {
        id: 1,
        name: 'Mohamed',
        age: 20
      },
      {
        id: 2,
        name: 'Ahmed',
        age: 25
      },
      {
        id: 3,
        name: 'Amr',
        age: 30
      }
    ]
  }

  deleteItem = (id) => {
    let items = this.state.items.filter(item => {
      return item.id !== id
    });
    this.setState({items});
  }

  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({items});
  }

  render() {
    return (
      <div className="App container">
        <h1 className='text-center'>To Do List</h1>
        <TodoItem items={this.state.items} deleteItem={this.deleteItem} />
        <AddItem addItem={this.addItem} />
      </div>
    )
  }
}

export default App;