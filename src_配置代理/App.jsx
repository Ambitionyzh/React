import axios from 'axios'
import React, { Component } from 'react'

export default class App extends Component {
    getStudentsData =()=>{
        axios.get('http://localhost:3000/api1/students').then(
            response =>{console.log('success',response.data)},
            error =>{console.log('error',error)}
        )
    }
    getCarData =()=>{
      axios.get('http://localhost:3000/api2/cars').then(
          response =>{console.log('success',response.data)},
          error =>{console.log('error',error)}
      )
  }
  render() {
    return (
      <div>
      <button onClick={this.getStudentsData}>点我获取学生数据</button>
      <button onClick={this.getCarData}>点我获取车数据

      </button></div>
    )
  }
}
