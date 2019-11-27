import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

export default class Component extends React.Component {
  render() {
    const { classes, text, url } = this.props;
    return (
      <Typography>
        <Link className={classes.item} to={url}>
          {text}
        </Link>
      </Typography>
    );
  }
}

Component.defaultProps = {
  classes: {},
  text: '',
  url: '',
};

Component.propTypes = {
  classes: PropTypes.object,
  text: PropTypes.string,
  url: PropTypes.string
};
