import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


test('shouls render the form elements', () =>{
  render(<App />);

  const inpuntEl = screen.queryByLabelText('rent')
  const btnEl = screen.getAllByRole('button')
  
  expect(inpuntEl).toBeInTheDocument()
  expect(btnEl).toBeInTheDocument()
}
)




