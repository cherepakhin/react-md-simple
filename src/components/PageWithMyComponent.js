import React from 'react';
import { TextContainer, Typography } from 'react-md';
import {MyComponent} from './MyComponent'
/* 
Использование: <PageWithMyComponent msg='aaa'/> 
msg - это props
в компоненте msg доступно в this.props.msg
Не прокатило (class PageWithProps.js <i>this.props.msg</i>=<b>{this.props.msg}</b>)
*/
const PageWithMyComponent = ( {msg} ) => {
      return (
        <React.Fragment>
          <TextContainer>
            <Typography type="body-1">
            This is PageWithMyComponent.js with <u>simple use variable(simple props)</u>:<br/>msg=<b>{msg}</b>
            </Typography>
          </TextContainer>
          <TextContainer>
            <MyComponent msg1={msg} msg2='msg for MyComponent'/>
          </TextContainer>
        </React.Fragment>
      );
}
  
export { PageWithMyComponent };