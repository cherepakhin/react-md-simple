import React from 'react';
import { TextContainer, Typography } from 'react-md';

// Работает. Короткий способ экспорта. без render()
// и где-то спрятано '... extends React.Component'
export default function HomePageWithShortExport() {
  return (
    <TextContainer>
      <Typography type="body-1">Короткий экспорт (без render() {} ):<br/>
      "export default function HomePageWithShortExport() &#123; return () &#125;"<br/>
      "нормальное использование в классе Home.js"
      </Typography>
    </TextContainer>
  );
}
