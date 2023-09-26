import React from 'react';
import { TextContainer, Typography } from 'react-md';

// Работает. Короткий способ экспорта.
// export default function Home() {
//   return (
//     <TextContainer>
//       <Typography type="headline-4">Home</Typography>
//     </TextContainer>
//   );
// }

// Работает. Типовое использование с 'extends' и 'export'.
class Home extends React.Component {
  render() {
    return (
      <div>
        <TextContainer>
          <Typography type="body-1">
            class Home.js. Типовое использование React.Component с render() <br/>
            с <b>extends</b> и <b>export</b> класс определен так: <br/>
            <b>class Home extends React.Component </b>
          </Typography>
        </TextContainer>
        <div id="msgText">aaaa</div>
      </div>
    );
  }
}

export { Home };