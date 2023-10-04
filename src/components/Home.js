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
        <TextContainer >
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
        <div data-testid="home-simple-text">Текст для data-testid=home-simple-text.</div>
        <div id="id_home_text">Текст id_home_text.</div>
        <br/>
        <Typography type="overline">Размеры шрифтов:</Typography>
        <div>Шрифт по умолчанию</div>
        <div><i>Шрифт по умолчанию(italic)</i></div>
        <div><b>Шрифт по умолчанию(bold)</b></div>
        <TextContainer>
          <Typography type="headline-1">Headline 1</Typography>
          <Typography type="headline-2">Headline 2</Typography>
          <Typography type="headline-3">Headline 3</Typography>
          <Typography type="headline-4">Headline 4</Typography>
          <Typography type="headline-5">Headline 5</Typography>
          <Typography type="headline-6">Headline 6</Typography>
          <Typography type="subtitle-1">Subtitle 1</Typography>
          <Typography type="subtitle-2">Subtitle 2</Typography>
          <Typography type="body-1">Body 1</Typography>
          <Typography type="body-2">Body 2</Typography>
          <Typography type="overline">Overline</Typography>
          <Typography type="caption" component="p">
            Caption
          </Typography>
      </TextContainer>
      </div>
    );
  }
}

export { Home };