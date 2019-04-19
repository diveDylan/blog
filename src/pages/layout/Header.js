import React, { Component } from 'react';
import { Menu, Layout } from 'antd'
const { Header } = Layout

class BlogHeader extends Component {
  // page change event
  menuChange(e) {
    console.log(e.target)
  }

  render() {
    console.log(this.props)
    return (
      <Header style={{background: '#fff'}}>
        <div className="logo" />
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          {this.props.menuList.map(i => <Menu.Item key={i.url} onClick={this.menuChange}>{i.name}</Menu.Item>)}
        </Menu>
      </Header>
    )
  }
}

export default BlogHeader