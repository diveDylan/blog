import { Menu, Layout } from 'antd'
import React, { Component } from 'react'
// header menulist
import menuList from '../../config/menuList'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import './layout.css'
import routes from '../../config/routes'
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();
const { Content, Footer } = Layout;

const { Header } = Layout

class BlogHeader extends Component {
  constructor(props) {
    super(props)
  }
  // page change event
  menuChange = (e) => {
    console.log(e, this)
    this.props.history.push(e.key)
  }

  render() {
    console.log(this.props, window.location)
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
class AppContainer extends Component {
  // page change event
  menuChange = (e) => {
    console.log(e, this)
    customHistory.push(e.key)
  }
  render() {
    console.log(this.props)
    return ( 
    <Layout className="layout">
    <Header style={{background: '#fff'}}>
        <div className="logo" />
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['/web']}
          style={{ lineHeight: '64px' }}
        >
          {menuList.map(i => <Menu.Item key={i.url} style={{fontSize: '16px'}} onClick={this.menuChange}>{i.name}</Menu.Item>)}
        </Menu>
      </Header>
      {/* <BlogHeader menuList={menuList} history={customHistory}/> */}
      {/* <Link to="/"/> */}
      <Content style={{ padding: '0px' }} className="main-content">
        <Router history={customHistory}>
          {
            routes.map(i => <Route {...i}/>)
          }
          </Router>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
      Blog @2019 Created by <a href="https://github.com/dylan921208">Dylan</a>
      </Footer>
    </Layout>
    )
  }
}

export default AppContainer
 
