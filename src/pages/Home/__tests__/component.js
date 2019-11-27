import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../component';

jest.mock('../../../components/ListItem');
jest.mock('../../../utils/text');

describe('Home component', () => {
  let props = {};
  beforeEach(() => {
    props = {
      actions: {
        getListOfDevelopers: jest.fn()
      },
      classes: {},
      isLoading: false,
      data: []
    };
  });

  it('renders correctly when loading', () => {
    props.isLoading = true;
    const tree = renderer
      .create(<Home {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly when data is ready', () => {
    props.data = ['1', '2', '3'];
    const tree = renderer
      .create(<Home {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly when data is empty', () => {
    const tree = renderer
      .create(<Home {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
