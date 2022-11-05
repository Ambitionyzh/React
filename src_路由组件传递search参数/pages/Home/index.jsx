import React, { Component } from 'react'
import News from './News'
import Message from './Message'
import MyNaviLink from '../../components/MyNaviLink'
import { Route,Redirect } from 'react-router-dom'
import { Switch } from 'react-router-dom'
export default class Home extends Component {
  render() {
    return (
      <div>
          <h3>我是Home的内容</h3>
          <div>

          <ul className="nav nav-tabs">
            <li>
              <MyNaviLink to = "/home/news">News</MyNaviLink>
            </li>
            <li>
            <MyNaviLink to = "/home/message">Message</MyNaviLink>
            </li>
          </ul>
          <Switch>
            <Route path = "/home/news" component={News} />
            <Route path = "/home/message" component={Message} />
            <Redirect to ="/home/news"/>
          </Switch>
        </div>
      </div>
    )
  }
}
