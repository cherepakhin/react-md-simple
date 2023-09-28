import React from 'react';
import { render, screen } from '@testing-library/react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { PageWithProps } from '../PageWithProps';

// Раскидать по разным файлам тесты с разной методикой
configure({ adapter: new Adapter() });

describe('PageWithProps with mount', () => {
    const msg = {
        txt: 'MESSAGE'
    };  
    it('render(<PageWithProps props={props_msg}/>)', () => {
      //const wrapper = mount(<PageWithProps props={msg}/>);  // TypeError: Cannot read properties of undefined (reading 'child')
      const wrapper = mount(<PageWithProps msg={msg}/>);
      expect(wrapper.props().msg).toEqual('MESSAGE');
  });
})

