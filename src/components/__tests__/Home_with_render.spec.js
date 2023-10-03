import React from 'react';
import { render, screen } from '@testing-library/react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Home } from '../Home';

// Раскидать по разным файлам тесты с разной методикой
configure({ adapter: new Adapter() });

describe('Home with render', () => {
    it('const {asFragment, getByText} = render(<Home />) and test screen.getByTestId', () => {
      // from https://flexiple.com/react/react-testing-library-cheat-sheet
      const {asFragment, getByText} = render(<Home />);
      // screen.debug(); // выводит на консоль содержимое Home в html формате
      // <body><div><div><div  class="rmd-text-container rmd-text-container--auto"> ...</body>
      // детали в https://www.freecodecamp.org/news/react-testing-library-tutorial-javascript-example-code/

      expect(screen.getByTestId('home-simple-text')).toBeInTheDocument();
      expect(screen.getByTestId('home-simple-text').textContent).toBe("Текст для data-testid=home-simple-text.");
  });
})

