import { Layout, Breadcrumb } from 'antd'
import React, { Component } from 'react'
import BlogHeader from './Header'
import menuList from '../../config/menuList'
const { Content, Footer } = Layout;

class AppContainer extends Component {
  render() {
    return ( 
    <Layout className="layout">
    <BlogHeader menuList={menuList}/>
    <Content style={{ padding: '0 50px' }}>
      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
     Blog @2019 Created by <a href="https://github.com/dylan921208">Dylan</a>
    </Footer>
  </Layout>)
  }
}

export default AppContainer
 
