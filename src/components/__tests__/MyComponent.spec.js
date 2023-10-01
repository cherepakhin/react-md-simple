import React from 'react';
import { shallow, mount, configure} from 'enzyme';
import { render } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('MyComponent with shallow', () => {
    it('simple', () => {
        // expect('MESSAGE1').to.equal('MESSAGE1');
        expect(1).toBe(1);
    });
})
