import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Component from './component';
import * as actions from './action';

function mapStateToProps(state) {
  const { isLoading, data } = state.home;
  return {
    isLoading,
    data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
