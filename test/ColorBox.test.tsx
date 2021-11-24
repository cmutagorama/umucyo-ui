import React from 'react';
import * as ReactDOM from 'react-dom';
import { ColorBox } from '../src';

describe('ColorBox', () => {
  it('renders without crashing', () => {
    const color = {
      bgClass: "bg-gray-25",
      code: 25,
      hex: "#FCFCFD",
    };
    const div = document.createElement('div');
    ReactDOM.render(<ColorBox color={color} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
