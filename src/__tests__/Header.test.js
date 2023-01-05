import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

import Header from '../components/Header';

it('renders Header correctly', () => {
  const tree = renderer.create(<BrowserRouter><Header /></BrowserRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});
