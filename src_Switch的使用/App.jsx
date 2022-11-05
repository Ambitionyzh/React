import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import MyNaviLink from './components/MyNaviLink'
import Test from './components/Test'

export default class App extends Component {
  render() {
    return (
        
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header/>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* <a className="list-group-item" href="./about.html">About</a>
              <a className="list-group-item active" href="./home.html">Home</a> */}
            
              <MyNaviLink to ="/about" >  About </MyNaviLink>
              <MyNaviLink to ="/home">Home  </MyNaviLink>

            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
              <Switch>
                <Route path="/about" component = {About}/>
                <Route path="/home" component = {Home}/>
                <Route path="/home" component = {Test}/>
              </Switch>
              </div>
            </div>
          </div>
        </div>
        
      </div>

    )
  }
}
