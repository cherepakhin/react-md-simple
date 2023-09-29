import React from 'react';
import { TextContainer, Typography } from 'react-md';

/* 
Использование: <PageWithProps msg='aaa'/> 
msg - это props
в компоненте msg доступно в this.props.msg
Не прокатило (class PageWithProps.js <i>this.props.msg</i>=<b>{this.props.msg}</b>)
*/
const PageWithProps = ( {msg} ) => {
      return (
        <React.Fragment>
          <TextContainer>
            <Typography type="body-1">
            class PageWithProps.js <i>simple use variable `msg`</i>=<b>{msg}</b>
            </Typography>
          </TextContainer>
        </React.Fragment>
      );
}
  
export { PageWithProps };