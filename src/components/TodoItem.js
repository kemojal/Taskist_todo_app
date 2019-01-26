import React, { Component } from 'react';
import PropTypes from 'prop-types';



class TodoItem extends Component {
    
    getStyle = () => {
        return {
            height: '45px',
            display: 'flex',
            marginLeft: '10px',
            marginRight: '10px',
            justifyContent: 'space-between',
            alignItem: 'center',
            borderRadius: '28px',
            border: this.props.todo.isCompleted ? '2px solid #e20066': '5px solid #e20066',
            paddingLeft: '20px',
            background: this.props.todo.isCompleted ? 'rgba(255, 255, 255, 0.2)' : '#ff8900', 
            fontWeight: this.props.todo.isCompleted ? 'normal': 'bold',
            textDecoration: this.props.todo.isCompleted ? 'line-through' : 'none'
        }
    }

    isChanged = () => {
        
        return this.props.todo.isCompleted = true;
    }
  render() {

     const { id, title } = this.props.todo;
    return (
      <p style  = { this.getStyle()}>
        
        <p style = { styles.inputStyle}>
        <input  type ='checkbox'  onChange = { this.props.isCheckedComplete.bind(this, id)} /> 
        {' '} { title}</p>
        {'   '}
        <button style = { styles.buttonStyle} onClick = {this.props.deleteTask.bind(this, id)}> x</button>
      </p>
    )
  }
}

TodoItem.PropTypes = {
    todo: PropTypes.object.isRequired
}
const styles = {
    buttonStyle:{
    backgroundColor: '#000',
    color: 'white',
    fontSize: '8px',
    width: '80px',
    outline: 'none',
    borderTopRightRadius: '25px',
    borderBottomRightRadius: '25px',
    border: 'none',
},
inputStyle:{
    color: '#fff',
    display: 'flex',
   justifyContent: 'center',
   alignItem: 'center',
   border: 'none',
}
}
export default TodoItem;