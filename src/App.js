import React, { Component } from 'react';

import './App.css';
import AddTodo from './AddTodo'
import Todo from './Todo'
import { connect } from 'react-redux'

let nexttodo=0;


class App extends Component {
constructor(props){
  super(props)
  this.state={todos:[]}
}
  TextOnChange(val){
    let tl=this.state.todos.length;
   
    if(nexttodo==0)
    {
      this.setState({
        todos:[
          {index:nexttodo,
          text:val}
        ]

      })
    }else{
     let oldDos=this.state.todos.slice(0,nexttodo).concat([
      {index:nexttodo,
      text:val}
    ]);
      
      this.setState({
        todos:oldDos
      })
    }
   
  }
  AddText(){
   // store.dispatch({
   //   type:'ADD_TODO',
   //   text:this.state.todos[nexttodo].text,
   //   id:nexttodo
   // })
   this.props.addTODO(this.state.todos[nexttodo].text)
  
    nexttodo+=1;
  }
  render() {
    return (
     <div>
     
      <AddTodo TextChange={this.TextOnChange.bind(this)} AddText={this.AddText.bind(this)}></AddTodo>
      <Todo todos={this.props.appTodo==undefined?[]:this.props.appTodo}></Todo>
      
      
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    appTodo: state.todoApp
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    addTODO:(text)=>{
      dispatch({
        type:'ADD_TODO',
        text:text,
        id:nexttodo

      })
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)

