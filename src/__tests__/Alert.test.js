import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import Alert from '../components/Alert';

it('renders Alert correctly', () => {
  const tree = renderer.create(<Alert message="test" close={() => {}} />).toJSON();
  expect(tree).toMatchSnapshot();
});
