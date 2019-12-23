import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import TextField from '../../elements/TextField';
import TimePicker from '../../elements/TimePicker';
import Dropdown from '../../elements/Dropdown';
import NumberField from '../../elements/NumberField';
import PhotoUpload from '../../elements/PhotoUpload';
import { Field, FieldArray } from 'redux-form';
import { Row, Col, Typography, Button } from 'antd';
import constant from './constant';
import moment from 'moment';
import Title from 'antd/lib/typography/Title';

const lang = 'id';

export default class Component extends React.Component {
  state = {
    addGuest: null
  }

  _renderNumber = (item) => {
    return (
      <Row style={{ margin: '5px 0 5px 0' }}>
        <Col xs={11} sm={12} md={10}>{item.label[lang]}</Col>
        <Col xs={1}>:</Col>
        <Col xs={12} sm={11} md={13}>
          <Field
            component={NumberField}
            {...item}
          />
        </Col>
      </Row>
    );
  }

  _renderTextField = (item) => {
    return (
      <Row style={{ margin: '5px 0 5px 0' }}>
        <Col xs={11} sm={12} md={10}>{item.label[lang]}</Col>
        <Col xs={1}>:</Col>
        <Col xs={12} sm={11} md={13}>
          <Field
            component={TextField}
            {...item}
          />
        </Col>
      </Row>
    );
  }

  _renderDropdown = (item) => {
    return (
      <Row style={{ margin: '5px 0 5px 0' }}>
        <Col xs={11} sm={12} md={10}>{item.label[lang]}</Col>
        <Col xs={1}>:</Col>
        <Col xs={12} sm={11} md={13}>
          <Field
            component={Dropdown}
            {...item}
          />
        </Col>
      </Row>
    );
  }

  _renderUploadImage = (item) => {
    return (
      <Row style={{ margin: '5px 0 5px 0' }}>
        <Col xs={11} sm={12} md={10}>{item.label[lang]}</Col>
        <Col xs={1}>:</Col>
        <Col xs={12} sm={11} md={13}>
          <PhotoUpload/>
        </Col>
      </Row>
    );
  }

  _renderTimePicker = (item) => {
    return (
      <Row style={{ margin: '5px 0 5px 0' }}>
        <Col xs={11} sm={12} md={10}>{item.label[lang]}</Col>
        <Col xs={1}>:</Col>
        <Col xs={12} sm={11} md={13}>
          <Field
            component={TimePicker}
            inputReadOnly
            {...item}
          />
        </Col>
      </Row>
    );
  }

  _renderDetail = ({ label, name, date }) => {
    const { data } = this.props;
    let value = data[name];
    if (date) {
      value = moment(value).format('DD MMMM YYYY');
    }
    return (
      <Row style={{ margin: '16px 0 16px 0' }}>
        <Col xs={11} sm={12} md={10}>{label[lang]}</Col>
        <Col xs={1}>:</Col>
        <Col xs={12} sm={11} md={13}>{value}</Col>
      </Row>
    );
  }

  _renderItem = (item) => {
    const props = { ...item };
    delete props.type;
    if (item.type === 'text') {
      return this._renderDetail(props);
    } else if (item.type === 'number') {
      return this._renderNumber(props);
    } else if (item.type === 'timePicker') {
      return this._renderTimePicker(props);
    } else if (item.type === 'textField') {
      return this._renderTextField(props);
    } else if (item.type === 'dropdown') {
      return this._renderDropdown(props);
    } else {
      return this._renderUploadImage(props);
    }
  }

  _renderFieldArray = ({ fields }) => {
    const { fieldArray } = constant;
    if (!this.state.addGuest) {
      this.setState({ addGuest: () => fields.push({}) });
    }
    return (
      <Fragment>
        {fields.map((name, index) => (
          <div key={name} style={{ marginTop: 20, padding: 16, width: '100%', backgroundColor: '#E8FBF4', borderRadius: 4, border: '1px solid #d3d3d3', height: 'auto', paddingBottom: 50 }}>
            <div style={{ display: 'flex' }} >
              <h3>Tamu {index + 1}</h3>
              <span style={{ flexGrow: 1 }} />
              <Button style={{ alignItems: 'flex-end' }} shape="circle" type="danger" onClick={() => fields.remove(index)} icon="delete" />
            </div>
            <br/>
            {fieldArray.map(
              item => this._renderItem({ ...item, name: `${name}.${item.name}` })
            )}
          </div>
        ))}
      </Fragment>
    );
  }

  render() {
    const { handleSubmit } = this.props;
    const { formSchema } = constant;
    return (
      <form onSubmit={handleSubmit}>
        <Typography>
          <Title style={{ marginBottom: 0 }} level={2}>Lilly Sorgarden Guest House</Title>
          <span style={{ fontSize: 18, fontWeight: 'bold', color: 'grey' }}>Online Self Check-In</span>
        </Typography>
        <br/>
        {formSchema.map(item => this._renderItem(item))}
        <FieldArray component={this._renderFieldArray} name="guest" />
        <br/>
        <Button type="primary" onClick={this.state.addGuest}>Tambah Tamu</Button>&nbsp;&nbsp;
        <Button type="danger">Submit</Button>
      </form>
    );
  }
}

// Component.defaultProps = {
//   placeholder: ''
// };

Component.propTypes = {
  data: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired
};
