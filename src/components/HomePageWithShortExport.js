import React from 'react';
import { TextContainer, Typography } from 'react-md';

// Работает. Короткий способ экспорта. без render()
// и где-то спрятано '... extends React.Component'
export default function HomePageWithShortExport() {
  return (
    <TextContainer>
      <Typography type="body-1">Короткий экспорт (без render() {} ):<br/>
      "export default function HomePageWithShortExport()"<br/>
      "нормальное использование в классе Home.js"
      </Typography>
    </TextContainer>
  );
}
