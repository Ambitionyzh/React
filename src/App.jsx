import React, { Component } from 'react'
import { Button,DatePicker } from 'antd'
import 'antd/dist/antd.css'
import {WechatOutlined} from '@ant-design/icons'
export default class App extends Component {
  render() {
    return (
      <div>
      <Button type ="primary">点我</Button>
      <Button>点我</Button>
      <WechatOutlined/>
      <DatePicker />
      </div>
     
    )
  }
}
