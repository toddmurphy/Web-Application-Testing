import React from 'react';
import { render, getByText } from '@testing-library/react';
import App from './App';
import Display from './components/Display';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

//test if the 'Baseball Scoreboard' title is on the page
test('baseball scoreboard title displays', () => {
  const { getByTestId } = render(<App />)

  getByTestId(/baseball scoreboard/i)

})

//test if the 'Balls' title is on the page
test('Strikes title is on the page', () => {
  const { getByTestId } = render(<Display />)

  getByTestId(/balls-title/i)
})


//test if the 'Strikes' title is on the page
test('Balls title is on the page', () => {
  const { getByTestId } = render(<Display />)

  getByTestId(/strikes-title/i)
})