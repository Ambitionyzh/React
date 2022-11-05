import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export default class MyNaviLink extends Component {
render() {
        const {title} = this.props
    return (
        <NavLink activeClassName="bk" className='list-group-item' {...this.props}/>

    )
}
}
