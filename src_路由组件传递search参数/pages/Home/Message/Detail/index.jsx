import React, { Component } from 'react'
import qs from 'querystring-es3'
const DetailData = [
    {id:'01',content:'你好，中国'},
    {id:'02',content:'你好，大司马'},
    {id:'03',content:'你好，芜湖起飞'},
]
export default class Detail extends Component {
    
  render() {
        // const {id,title} = this.props.match.params
        const {search} = this.props.location
        const{id,title} = qs.parse(search.slice(1))
        const findResult = DetailData.find((detailObj) => {
            return detailObj.id === id
        })
    return (
        <ul>
            <li>ID:{id} </li>
            <li>Title:{title} </li>
            <li>Content:{findResult.content} </li>
        </ul>
    )
  }
}
