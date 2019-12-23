import React from 'react';
import './styles.css';
import { Row, Col } from 'antd';
import SelfCheck from '../../components/form/SelfCheck';

export default class Component extends React.Component {
  render() {
    return (
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={12} lg={12}>
          <SelfCheck onSubmit={v => alert(JSON.stringify(v))} />
        </Col>
        <Col xs={0} sm={12} md={12} lg={12}>
          asd
          <div className="banner">asdsad</div>
        </Col>
      </Row>
    );
  }
}
