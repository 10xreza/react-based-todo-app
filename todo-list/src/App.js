import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './addTodo'

class App extends Component {
  state = {
    todos: [
      {id:1,content: "but some milk"},
      {id:2,content: 'play games'}
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })

    this.setState({
      todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random()
    let todoList =[...this.state.todos,todo]
    this.setState({
      todos: todoList
    })
  } 

  render() {
      return (
      <div className="App ">
      <h1 className="has-text-centered has-text-info is-size-2 has-text-weight-semibold is-spaced title"> Todo's</h1>
      <AddTodo AddTodo={this.addTodo}/>
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} className="columns"/>
      </div>
      );
    }
}

export default App;
