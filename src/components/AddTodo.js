import React, { Component } from 'react'

class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

onSubmit = (e)=>{
    e.preventDefault();
    if(this.state.title != ""){
        this.props.addTodo(this.state.title);
    this.setState({
        title: ''
    })

    }
        
    
    }
  render() {
    return (
      <form onSubmit = { this.onSubmit}>
        <input
        style = { styles.inputStyle}
        type = 'text'
        name = 'title'
        placeholder = 'Add Task'
        value = { this.state.title}
        onChange = { this.onChange}
        />
        <input 
        style = { styles.addBtStyle}
        type = 'submit' 
        value =' Add' />
        
      </form>
    )
  }
}

const styles = {
    inputStyle:{
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    width: '200px',
    fontSize: '18px',
    marginTop: '20px',
    marginBottom: '20px',
    outline: 'none',
    borderRadius: '22px',
    padding: '20px',
    paddingTop: '8px',
    paddingBottom: '8px',
    border: '5px solid #e20066',
    marginRight: '10px',
},
addBtStyle:{
    backgroundColor: '#99ff00',
    color: 'white',
    fontSize: '18px',
    width: '80px',
    outline: 'none',
    padding: '10px',
    borderRadius: '45px',
    border: '5px solid #e20066',
}
}

export default  AddTodo;