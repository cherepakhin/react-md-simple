import React from 'react';
import { render, screen } from '@testing-library/react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Home } from '../Home';

// Раскидать по разным файлам тесты с разной методикой
configure({ adapter: new Adapter() });

describe('Home with render', () => {
    it('const {asFragment, getByText} = render(<Home />)', () => {
      // from https://flexiple.com/react/react-testing-library-cheat-sheet
      const {asFragment, getByText} = render(<Home />);
      // expect(getByText('div')).toBeInTheDocument()
  });
})

