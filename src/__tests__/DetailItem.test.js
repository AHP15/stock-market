import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import DetailItem from '../components/DetailItem';

it('renders DetailItem correctly', () => {
  const tree = renderer.create(<DetailItem title="test" value="10" />).toJSON();
  expect(tree).toMatchSnapshot();
});
