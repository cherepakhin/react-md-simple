import React from 'react';
import { TextContainer, Typography } from 'react-md';
import PropTypes, { number, string, shape } from 'prop-types';

// Работает. Короткий способ экспорта.
// export default function Home() {
//   return (
//     <TextContainer>
//       <Typography type="headline-4">Home</Typography>
//     </TextContainer>
//   );
// }

// Работает. Типовое использование с 'extend' и 'export'.
class Home extends React.Component {
  render() {
    return (
      <TextContainer>
        <Typography type="headline-4">Home Типовое использование с 'extend' и 'export'</Typography>
      </TextContainer>
    );
  }
}

export { Home };