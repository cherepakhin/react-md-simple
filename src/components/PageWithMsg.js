import React from 'react';
import { TextContainer, Typography } from 'react-md';

/* 
Использование: <PageWithProps msg='aaa'/> 
msg - это props
в компоненте msg доступно в this.props.msg
Не прокатило (class PageWithProps.js <i>this.props.msg</i>=<b>{this.props.msg}</b>)
*/
const PageWithMsg = ( {msg} ) => {
      return (
        <React.Fragment>
          <TextContainer>
            <Typography type="body-1">
            class PageWithMsg.js <i>simple use variable `msg`</i>=<b><div id="msgid">{msg}</div></b>
            </Typography>
          </TextContainer>
        </React.Fragment>
      );
}
  
export { PageWithMsg };