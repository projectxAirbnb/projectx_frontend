import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { Select } from 'antd';

const { Option } = Select;

export default class Component extends React.Component {
  _renderDropdown = () => {
    const { input: { onChange, value }, placeholder, options, ...rest } = this.props;
    return (
      <Select
        {...rest}
        onChange={onChange}
        placeholder={placeholder}
        value={value || undefined}
      >
        {options.map(({ label, value }) => <Option key={value} value={value}>{label}</Option>)}
      </Select>
    );
  }

  _renderDropdownSearch = () => {
    const {
      input: { onChange, value },
      placeholder,
      options,
      filter,
      onSearch,
      ...rest
    } = this.props;
    return (
      <Select
        {...rest}
        onChange={onChange}
        placeholder={placeholder}
        value={value || undefined}
        filterOption={filter}
        showSearch
        onSearch={onSearch}
        notFoundContent={null}
      >
        {options.map(({ label, value }) => <Option key={value} value={value}>{label}</Option>)}
      </Select>
    );
  }

  render() {
    const { search } = this.props;
    return (
      <Fragment>
        {search ? this._renderDropdownSearch() : this._renderDropdown()}
      </Fragment>
    );
  }
}

Component.defaultProps = {
  filter: true,
  placeholder: '',
  onSearch: null,
  options: [],
  search: false
};

Component.propTypes = {
  input: PropTypes.object.isRequired,
  filter: PropTypes.bool,
  placeholder: PropTypes.string,
  onSearch: PropTypes.func,
  options: PropTypes.array,
  search: PropTypes.bool
};
