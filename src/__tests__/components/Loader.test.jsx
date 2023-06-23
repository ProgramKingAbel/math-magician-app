import React from 'react';
import renderer from 'react-test-renderer';
import Loader from '../../components/Loader';

test('renders Loader correctly', () => {
  const component = renderer.create(<Loader />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
