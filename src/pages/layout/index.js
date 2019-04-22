import { Layout } from 'antd'
import React, { Component } from 'react'
import BlogHeader from './Header'
// header menulist
import menuList from '../../config/menuList'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './layout.css'
import routes from '../../config/routes'
import { createBrowserHistory } from 'history'

const customHistory = createBrowserHistory()
const { Content, Footer } = Layout

class AppContainer extends Component {
  render() {
    console.log(this.props)
    return (
      <Router history={customHistory}>
        <Layout className="layout">
          <BlogHeader menuList={menuList} history={customHistory} />
          <Content style={{ padding: '0px' }} className="main-content">
            {routes.map(i => (
              <Route {...i} key={i.path} />
            ))}
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Blog @2019 Created by{' '}
            <a href="https://github.com/dylan921208">Dylan</a>
          </Footer>
        </Layout>
      </Router>
    )
  }
}

export default AppContainer
