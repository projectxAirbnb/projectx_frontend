import React from 'react';
import PropTypes from 'prop-types';
import ROUTES from '../../configs/routes';
import { Link } from 'react-router-dom';

export default class Component extends React.Component {
  componentWillMount() {
    this.props.actions.getListOfDevelopers();
  }

  _renderList() {
    const { data } = this.props;
    if (data.length === 0) {
      return (
        <p>No data</p>
      );
    } else {
      return (
        <div>
          {
            data.map((item, idx) => (
              <div key={idx} >
                <Link to={ROUTES.DEVELOPER(item)}>
                  {item}
                </Link>
              </div>
            ))
          }
        </div>
      );
    }
  }

  render() {
    const { classes, isLoading } = this.props;
    if (isLoading) {
      return (
        <h4 variant="display2">Loading...</h4>
      );
    } else {
      return (
        <section className={classes.container}>
          {/* <img className={classes.logo} src={IMAGES.LOGO} /> */}
          <h4 variant="display2">App is Ready</h4>
          <h4 className={classes.routeExample}>Route example:</h4>
          {this._renderList()}
        </section>
      );
    }
  }
}

Component.defaultProps = {
  actions: {},
  classes: {},
  data: [],
  isLoading: false,
};

Component.propTypes = {
  actions: PropTypes.object,
  classes: PropTypes.object,
  data: PropTypes.array,
  isLoading: PropTypes.bool,
};
