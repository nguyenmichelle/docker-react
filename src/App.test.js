import { render, screen } from '@testing-library/react';
import App from './App';

test('4 is answer', () => {
  const dom = render(<App />);
  expect(dom.container.querySelector('#answer')).toH('4')
});
test('6 is answer', () => {
  const dom = render(<App />);
  expect(dom.container.querySelector('#answer')).toHaveTextContent('6')
});