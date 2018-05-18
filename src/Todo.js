import React,{Component } from 'react'

class Todo extends Component{
    constructor(props){
        super(props)
    }
render(){
    let todolist=this.props.todos.map(todo=> <li key={todo.id}>{todo.text}</li>  );
    return(
        <div>
           
        {todolist}
        
        </div>
    );
}
}
export default Todo