import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types'

class Todos extends Component {

    
 renderTodos(){
     return this.props.todos.map( (todo) =>(
         <TodoItem todo = { todo}  isCheckedComplete = { this.props.isCheckedComplete } deleteTask ={ this.props.deleteTask}/>
     ))

    }
  render() {
    return (
      <div>
        { this.renderTodos()}
      </div>
    )
  }
}

Todos.PropTypes = {
    todos: PropTypes.array.isRequired
}


export default Todos;
