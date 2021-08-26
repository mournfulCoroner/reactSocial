import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store'
import App from './App';

test('renders learn react link', () => {
  render(<BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
