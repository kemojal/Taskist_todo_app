import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';
import Header from './components/Header';

import AddTodo from './components/AddTodo';

import uuid from 'uuid';

import {PieChart} from 'react-easy-chart';

//const url = "./sound/blip-plock-pop.mp3";
//const audio = new Audio(url);
let numOfTasks  = 0;
let numCompleted = 0;
class App extends Component {
  state  = {
    todos: [
      {
        id: uuid.v4(), 
        title: "Make my Resume",
        isCompleted: false,
      },
      {
        id: uuid.v4(), 
        title: "Go to the gym",
        isCompleted: false,
      },
      {
        id: uuid.v4(), 
        title: "Have dinner with friends",
        isCompleted: false,
      }, 
      {
        id: uuid.v4(), 
        title: "Cooking with friends",
        isCompleted: false,
      }
    ],
    numberOfCompeletedTask: 1,
   
    //isMusicPlaying: false 
  }
  isCheckedComplete = (id)=>{
    
    this.setState({ todos: this.state.todos.map( (todo) =>{
      if( todo.id  === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      
      //audio.play()
      //console.log(" audio + ", audio)
      return todo
    })});
}

deleteTask = (id)=>{
  //console.log("hello there " + id)
  numOfTasks = this.state.todos.length;
  numCompleted = this.state.numberOfCompeletedTask + 1;
  this.setState({numberOfCompeletedTask: numCompleted })
      console.log("num1" + this.state.numberOfCompeletedTask, " no = " + numOfTasks);
  this.setState({
    todos: [...this.state.todos.filter( todo => todo.id !== id)]
  });
  
  //audio.play()
}

addTodo = ( title) =>{
  const newTask = {
    id: uuid.v4(), 
    title, 
    isCompleted: false
  }
  this.setState({ todos: [...this.state.todos, newTask]})
  
  //audio.play()
}
  render() {
    
    const pieCompleted = Math.round(( numCompleted / numOfTasks) * 360);
    const pieRemain  = (360 - pieCompleted);
    let percentage =  ( numCompleted / numOfTasks) * 50;
    percentage  = Math.round(percentage);
    console.log( pieCompleted);
    console.log( pieRemain);
    return (
      <div className="App">
        <Header/>
        <div>
        <AddTodo addTodo = { this.addTodo }/>
        </div>
        
         <div style = { styles.dashboard} >
         <div style = { styles.todoContainer}>
         <Todos todos = { this.state.todos} isCheckedComplete = { this.isCheckedComplete } deleteTask = { this.deleteTask} />
         </div>
         
         </div>
        
      </div>
    );
  }
}
const styles = {
  dashboard:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  todoContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)', 
    width : '100%',
    padding: '10px',
    justifyContent: 'center',
    borderRadius: '30px',
    marginRight: '40px',
  }
}
export default App;
