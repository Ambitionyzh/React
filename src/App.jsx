import React, { Component } from 'react'
import Count from './containers/Count'//引入count的容器组件
import Person from './containers/Person'
export default class App extends Component {
  render() {
    return (
      <div>
        <Count />
        <hr></hr>
        <Person/>
      </div>
    )
  }
}
