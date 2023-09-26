import React from 'react';
import { render, screen } from '@testing-library/react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Home } from '../Home';

configure({ adapter: new Adapter() });

describe('Home with shallow', () => {
    it('test text message', () => {
      const homePage = shallow(<Home />);
     
      expect(homePage.text().includes("class Home.js. Типовое использование React.Component с render")).toBe(true);
    //   expect("---").toBe(helloMessage);
    // expect(helloMessage.props().msgText).toBe("helloMessage");
    //   expect(cardTitle.props().title).toBe(props.feature.name);
    // expect(cardTitle.props().subtitle).toBe('NAME_EMPLOYEE(31.03.18)');
    });
    it('show wrapper.debug()', () => {
      // Проверка props. Не проверял.
      const wrapper = shallow(<Home />);
      console.log(wrapper.debug());
      console.log(wrapper.find({children: "aaaa"}))
      expect(wrapper.find({children: "aaaa"}).exists()).toEqual(true);
    });
})