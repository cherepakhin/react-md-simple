import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import { render } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import { PageWithMsg } from '../PageWithMsg';

// Раскидать по разным файлам тесты с разной методикой
configure({ adapter: new Adapter() });

describe('PageWithMsg with mount', () => {
  it('render(<PageWithMsg msg="MESSAGE1"/>)', () => {
    const props = {
      msg: "MESSAGE1"
    }
    //const wrapper = mount(<PageWithProps props={msg}/>);  // TypeError: Cannot read properties of undefined (reading 'child')
    // const  wrapper = shallow(<PageWithMsg {...props}/>);

    const wrapper = shallow(<PageWithMsg msg="MESSAGE1" />);
    // '#' означает поиск по id <div id="msgid">...</>
    expect(wrapper.find('#msgid').html()).toContain('MESSAGE1');
  });
  it('render(<PageWithMsg with props/>)', () => {
    const props = {
      msg: "MESSAGE1"
    }
    const wrapper = shallow(<PageWithMsg {...props} />);
    // '#' означает поиск по id <div id="msgid">...</>
    expect(wrapper.find('#msgid').html()).toContain('MESSAGE1');
  });
  it('render(<PageWithMsg with props/>) test equal', () => {
    const props = {
      msg: "MESSAGE1"
    }
    const wrapper = shallow(<PageWithMsg {...props} />);
    // '#' означает поиск по id <div id="msgid">...</>
    expect(wrapper.find('#msgid').html()).toContain('MESSAGE1');
  });

  // expect(wrapper.props().includedProp).to.equal('Success!');
  // expect(wrapper.props().msg).to.equal('MESSAGE1');
  // const message = wrapper.find('.msgid');
  // console.log("++++MESSAGE");
  // console.log(message);
  // const message=result.container.querySelector('#msgid');
  //expect(message).toEqual("MESSAGE1");
  // console.log(wrapper.props().children);
  // expect(wrapper.props().children.includes("MESSAGE1")).toEqual(true);
})

