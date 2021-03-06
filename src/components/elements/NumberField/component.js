import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { InputNumber } from 'antd';

export default class Component extends React.Component {
  render() {
    const { input: { onChange, value }, placeholder, ...rest } = this.props;
    return (
      <Fragment>
        <InputNumber
          {...rest}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
        />
      </Fragment>
    );
  }
}

Component.defaultProps = {
  placeholder: ''
};

Component.propTypes = {
  input: PropTypes.object.isRequired,
  placeholder: PropTypes.string
};
