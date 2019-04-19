import { Layout } from 'antd'
import React, { Component } from 'react'
import BlogHeader from './Header'
import menuList from '../../config/menuList'
import './layout.css'

const { Content, Footer } = Layout;

class AppContainer extends Component {
  render() {
    return ( 
    <Layout className="layout">
      <BlogHeader menuList={menuList}/>
      <Content style={{ padding: '0px' }} className="main-content">
        <div style={{ background: '#fff',  minHeight: 280 }}></div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
      Blog @2019 Created by <a href="https://github.com/dylan921208">Dylan</a>
      </Footer>
    </Layout>
    )
  }
}

export default AppContainer
 
