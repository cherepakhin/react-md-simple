import React from 'react';
import { TextContainer, Typography } from 'react-md';

// Работает. Короткий способ экспорта см. в HomePageWithShortExport.js
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
            класс определен так: <br/>
            <i>class Home extends React.Component &#123; <br/>
            &nbsp;&nbsp;render() &#123; <br/>&nbsp;&nbsp;
              return  ( div.../div) <br/>
              &#125;
            &#125;</i>
          </Typography>
        </TextContainer>
        <div>Просто какой-то текст для примера вне TextContainer.</div>
      </div>
    );
  }
}

export { Home };