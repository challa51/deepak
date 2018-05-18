import React,{Component } from 'react'

class AddTodo extends Component{
    constructor(props){
        super(props)
       
    }
    textChnge(e){
       
        this.props.TextChange(e.target.value)
    }
    AddText(){
        this.refs.somename.value=''
        this.props.AddText()
    }
    
render(){
    return(
        <div>
           
        <input type='text' ref="somename" onChange={this.textChnge.bind(this)}></input>
        <button onClick={this.AddText.bind(this)}>add</button>
       
        </div>
    );
}
}

export default AddTodo