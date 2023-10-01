import React from 'react';
import { shallow, mount, configure} from 'enzyme';
import { render } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('MyComponent with shallow', () => {
    it('simple test Int', () => {
        expect(1).toBe(1);
    });
    it('simple test String', () => {
        expect('MESSAGE1').toBe('MESSAGE1');
    });
})
