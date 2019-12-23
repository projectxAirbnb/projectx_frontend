import { reduxForm } from 'redux-form';
import Component from './component';
// import validate from './validate';
import { connect } from 'react-redux';

let ComponentTemp = reduxForm({
  form: 'selfCheckForm'
  // validate
})(Component);
ComponentTemp = connect(state => {
  // const { data } = state.myProfile;
  return {
    data: {
      bookingId: 'BOOK87636ID',
      type: 'Platinum',
      bookingName: 'Agus Rachman',
      checkin: '2019-12-23T11:37:26.538Z',
      checkout: '2019-12-24T11:37:26.538Z'
    },
    initialValues: {
      guest: [
        { origin: '' }
      ]
    }
  };
})(ComponentTemp);

export default ComponentTemp;
