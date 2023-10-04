import React from 'react';
import { render, screen } from '@testing-library/react';
import { shallow, mount, configure } from 'enzyme/build';
import Adapter from 'enzyme-adapter-react-16';
import { Home } from '../Home';

configure({ adapter: new Adapter() });

describe('full Home DOM tests', () => {
    // beforeEach(() => {
    //  reactWrapper = mount(<Home />);
    // });
    it('Home child React Component html content would be rendered', () => {
        let wrapperHome = mount(<Home />);
        expect(wrapperHome.find(Home).length).toBe(1);
        // expect(wrapperHome.find('p').length).toBe(1);
        // Простая проверка на существование
        expect(wrapperHome.find(Home)).toBeTruthy(); 
        //  expect(reactWrapper.find('#childId').html())
        //   .toContain('Child component content');
    });
});