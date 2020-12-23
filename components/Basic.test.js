import Basic from './Basic';
import { shallow } from 'enzyme';

describe('Basic Component', () => {
  it('When Basic successfully renders it renders a component with the className .test', () => {
    const wrapper = shallow(<Basic />);
    expect(wrapper.find('#test').length).toEqual(1);
  });
});