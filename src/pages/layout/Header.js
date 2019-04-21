import React, { Component } from 'react';
import { Menu, Layout } from 'antd'
import { withRouter } from 'react-router-dom'
const { Header } = Layout

class BlogHeader extends Component {
  constructor(props) {
    super(props)
  }
  // page change event
  menuChange = (e) => {
    this.props.history.push(e.key)
  }

  render() {
    return (
      <Header style={{background: '#fff'}}>
        <div className="logo" />
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['/web']}
          style={{ lineHeight: '64px' }}
        >
          {this.props.menuList.map(i => <Menu.Item key={i.url} style={{fontSize: '16px'}} onClick={this.menuChange}>{i.name}</Menu.Item>)}
        </Menu>
      </Header>
    )
  }
}

export default withRouter(BlogHeader)