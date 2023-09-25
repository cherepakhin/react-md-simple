import React from 'react';
import { TextContainer, Typography } from 'react-md';

class PageWithProps extends React.Component {
    render() {
      return (
        <TextContainer>
          <Typography type="body-1">
            class PageWithProps.js <i>props.msg</i>=<b>{this.props.msg}</b>
          </Typography>
        </TextContainer>
      );
    }
  }
  
  export { PageWithProps };