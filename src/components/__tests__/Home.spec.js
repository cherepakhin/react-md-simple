import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Home } from '../Home';

configure({ adapter: new Adapter() });

const props = {
    msgText: "helloMessage"
}

describe('Home', () => {
    it('text message', () => {
      const homePage = shallow(<Home {...props}/>);
      const helloMessage = homePage.find('msgText');
    //   expect("---").toBe(helloMessage);
      expect(helloMessage.props().msgText).toBe("helloMessage");
    //   expect(cardTitle.props().title).toBe(props.feature.name);
      // expect(cardTitle.props().subtitle).toBe('NAME_EMPLOYEE(31.03.18)');
    });
})

