import React from 'react';
import { TextContainer, Typography } from 'react-md';

// https://legacy.reactjs.org/docs/components-and-props.html
// You can also use an ES6 class to define a component:
// call: <SimpleComponentEs6 msg="MESSAGE from SimpleComponentEs6"/> (see in App.js)
// access to props in render() in SimpleComponentEs6: <b>{this.props.msg}</b> 
class SimpleComponentEs6 extends React.Component {
    render() {
        return (
            <React.Fragment>
              <TextContainer>
                <Typography type="body-1">
                class SimpleComponentEs6.js <u>simple use property `msg`</u>: <b>{this.props.msg}</b>
                </Typography>
              </TextContainer>
            </React.Fragment>
          );
        }
}

export { SimpleComponentEs6 };