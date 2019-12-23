import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Layout } from 'antd';
import SelfCheck from '../../components/form/SelfCheck';
import './styles.css';

const { Header, Content } = Layout;

export default class Component extends React.Component {
  componentDidMount() {
    this.props.actions.getData();
  }

  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
        </Header>
        <Content style={{ padding: 30 }}>
          <Row>
            <Col xs={0} sm={6} md={6} lg={6} />
            <Col xs={24} sm={12} md={12} lg={12}>
              <SelfCheck onSubmit={v => alert(JSON.stringify(v))} />
            </Col>
            <Col xs={0} sm={6} md={6} lg={6} />
          </Row>
        </Content>
      </Layout>
    );
  }
}

Component.propTypes = {
  actions: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
};
