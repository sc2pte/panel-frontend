import domRender from 'utils/domRender';
import RaceImage from './RaceImage';

const testData = {
  race: 'terran',
};

it('renders correctly', () => {
  domRender(RaceImage, testData);
});