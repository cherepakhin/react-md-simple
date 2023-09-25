import React from 'react';
import { TextContainer, Typography } from 'react-md';
import PropTypes from 'prop-types';

/* 
Использование: <PageWithProps msg='aaa'/> 
в компоненте msg доступно в this.props.msg
*/
class PageWithProps extends React.Component {
    static propTypes = {
        msg: PropTypes.string.isRequired
    };
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