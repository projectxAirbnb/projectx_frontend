import React from 'react';
import renderer from 'react-test-renderer';
import ListItem from '../index';

jest.mock('react-router-dom');

describe('ListItem', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<ListItem text="Hello" url="localhost" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
