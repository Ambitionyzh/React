import React, { Component } from 'react';
import Header from './compoments/Header'
import List from './compoments/List'
import Footer from './compoments/Footer'
import './App.css'
export default class App extends Component {
    //状态在哪里，操作状态的方法就在哪里
    state = {todos:[
        {id:'001',name:'吃饭',done:true},
        {id:'002',name:'睡觉',done:true},
        {id:'003',name:'打代码',done:true}
    ]}
    addToDo=(todoObj)=>{
        const {todos} = this.state
        const newTodos = [todoObj,...todos]
        this.setState({todos:newTodos})
    }
    updateTodo=(id,done)=>{
        const{todos} = this.state
        const newTodos = todos.map((todoObj)=>{
            if(todoObj.id === id) return{...todoObj,done:done}
            else return todoObj
        })
        this.setState({todos:newTodos})
    }
    deleteTodo = (id)=>{
        const {todos} = this.state
        const newTodos = todos.filter((todoObj) =>{
            return todoObj.id !==id
        })
        this.setState({todos:newTodos})

    }
    checkAllTodo = (done)=>{
        const {todos} = this.state
        const newTodos = todos.map((todoObj)=>{
            return{...todoObj,done:done}
        })
        this.setState({todos:newTodos})
    }
    clearAllDone = ()=>{
        const {todos} = this.state
        const newTodos = todos.filter((todoObj)=>{
            return !todoObj.done
        })
        this.setState({todos:newTodos})
    }
    render() {
        const {todos} = this.state
        return (
            <div className="todo-container">
                <div className="todo-warp">
                    <Header addToDo = {this.addToDo}/>
                    <List todos = {todos} updateTodo = {this.updateTodo} deleteTodo = {this.deleteTodo} />
                    <Footer  todos = {todos} checkAllTodo = {this.checkAllTodo} clearAllDone = {this.clearAllDone}/>
                </div>
            
            </div>          
            )
    }
}
