import React from 'react';
import { Layout, Menu, Icon, Breadcrumb } from 'antd';
import './styles.css';
import { NavLink } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

export default class Component extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     collapsed: false
  //   }
  // }
  // onCollapse = collapsed => {
  //   console.log(collapsed);
  //   this.setState({ collapsed });
  // };

  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
        </Header>
        <Layout>
          <Sider width={250}>
            <Menu
              mode="inline"
              style={{ height: '100%', borderRight: 0 }}
              defaultSelectedKeys={['nav-dashboard']}
            >
              <Menu.Item key="nav-dashboard" className="nav-item">
                <NavLink to="/">
                  <Icon type="deployment-unit" />
                  <span>Dashboard</span>
                </NavLink>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              style={{
                background: '#fff',
                margin: 0,
                minHeight: 1000,
                padding: 24
              }}
            >
              Content
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
