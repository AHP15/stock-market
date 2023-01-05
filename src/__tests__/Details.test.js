import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

import Details from '../components/Details';

import Store from '../slices/store';

it('renders Details correctly', () => {
  const tree = renderer.create(
    <BrowserRouter>
      <Provider store={Store}><Details /></Provider>
    </BrowserRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
