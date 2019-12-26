import React from 'react';
import { Layout, Menu, Icon, Breadcrumb } from 'antd';
import './styles.css';
import { NavLink } from 'react-router-dom';
import { SwipeableDrawer, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const { Header, Sider, Content } = Layout;

export default class Component extends React.Component {
  state = {
    drawerOpen: false
  }

  handleDrawer = () => {
    const { drawerOpen } = this.state;
    this.setState({ drawerOpen: !drawerOpen });
  };

  renderDrawer = () => {
    return (
      <Sider theme="light" style={{ paddingRight: 1, overflow: 'hidden' }}>
        <Menu
          theme="light"
          mode="inline"
          style={{ height: '100%', borderRight: 0 }}
          defaultSelectedKeys={['nav-dashboard']}
        >
          <div className="logo"/>
          <Menu.Item key="nav-dashboard" className="nav-item">
            <NavLink to="/dashboard">
              <Icon type="deployment-unit" />
              <span>Dashboard</span>
            </NavLink>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }

  render() {
    return (
      <Layout>
        <Header className="header">
          <IconButton onClick={this.handleDrawer}>
            <MenuIcon className="icon" />
          </IconButton>
          <div className="logo" />
        </Header>
        <Layout>
          <SwipeableDrawer
            open={this.state.drawerOpen}
            onClose={this.handleDrawer}
            onOpen={this.handleDrawer}
          >
            {this.renderDrawer()}
          </SwipeableDrawer>
          <Layout style={{ padding: '0 16px 16px' }}>
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
