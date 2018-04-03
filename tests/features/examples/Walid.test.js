import React from 'react';
import { shallow } from 'enzyme';
import { Walid } from '../../../src/features/examples';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Walid />);
  expect(renderedComponent.find('.examples-walid').length).toBe(1);
});
