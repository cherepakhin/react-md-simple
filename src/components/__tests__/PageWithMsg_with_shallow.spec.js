import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { PageWithMsg } from '../PageWithMsg';

// Раскидать по разным файлам тесты с разной методикой
configure({ adapter: new Adapter() });

describe('PageWithMsg with shallow', () => {
  it('shallow(<PageWithMsg msg="MESSAGE1"/>)', () => {

    const wrapper = shallow(<PageWithMsg msg="MESSAGE1" />);
    // '#' означает поиск по id <div id="msgid">...</>
    expect(wrapper.find('#msgid').html()).toContain('MESSAGE1');
  });

  it('shallow(<PageWithMsg with props/>)', () => {
    const props = {
      msg: "MESSAGE1"
    }
    const wrapper = shallow(<PageWithMsg {...props} />);
    // '#' означает поиск по id <div id="msgid">...</>
    expect(wrapper.find('#msgid').html()).toContain('MESSAGE1');
    expect(wrapper.find('#msgid').html()).toBe('<div id=\"msgid\">MESSAGE1</div>');
    expect(wrapper.find('#msgid').text()).toBe('MESSAGE1');
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

