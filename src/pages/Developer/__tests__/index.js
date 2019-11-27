import React from 'react';
import renderer from 'react-test-renderer';
import Developer from '../index';

jest.mock('react-router-dom');

describe('Developer', () => {
  it('renders correctly', () => {
    const match = {
      params: {
        name: 'Hello'
      }
    };
    const tree = renderer
      .create(<Developer match={match} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
