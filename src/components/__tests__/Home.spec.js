import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Home } from '../Home';

configure({ adapter: new Adapter() });

describe('Home', () => {
    it('text message', () => {
      const homePage = shallow(<Home />);
     
      expect(homePage.text().includes("class Home.js. Типовое использование React.Component с render")).toBe(true);
    //   expect("---").toBe(helloMessage);
    // expect(helloMessage.props().msgText).toBe("helloMessage");
    //   expect(cardTitle.props().title).toBe(props.feature.name);
    // expect(cardTitle.props().subtitle).toBe('NAME_EMPLOYEE(31.03.18)');
    });
})

