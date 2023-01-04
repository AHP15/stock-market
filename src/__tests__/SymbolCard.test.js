import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

import SymbolCard from '../components/SymbolCard';

import Store from '../slices/store';

it('renders Details correctly', () => {
  const tree = renderer.create(
    <BrowserRouter>
      <Provider store={Store}>
        <SymbolCard symbol="test" company="test" price={100} dark={false} index={0} />
      </Provider>
    </BrowserRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
