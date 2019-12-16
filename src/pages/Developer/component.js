import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ROUTES from '../../configs/routes';

export default class Component extends React.Component {
  render() {
    const name = this.props.match.params.name;
    return (
      <section>
        <h4>
          <Link to={ROUTES.HOME()}>Back to home</Link>
        </h4>
        <h4 variant="display2">Developer name: {name}</h4>
      </section>
    );
  }
}

Component.defaultProps = {
  match: {},
};

Component.propTypes = {
  match: PropTypes.object
};
