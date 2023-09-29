import React from 'react';
import { TextContainer, Typography } from 'react-md';
import { useParams } from 'react-router-dom';

// for import use 'import PageWithManyElements from './components/PageWithManyElements'
// const PageWithProps = ( {msg} ) => {
function PageWithManyProps(props) {
  let fromUseParams = useParams()
  console.log(props) // -> {prop1: 'val_prop1', prop2: 'val_prop2'}
  return (
    <div>
      <TextContainer>
        <Typography type="body-1">PageWithManyProps</Typography>
        {/* 
          Использовано в App.js, как:
          <Route path="/page-with-many-props" element={<PageWithManyProps prop1="val_prop1" prop2="val_prop2"/>} />
          внимание к определению prop1, prop2
        */}
        <Typography type="body-1">val prop1='{props.prop1}'</Typography>
        <Typography type="body-1">val prop2='{props.prop2}'</Typography>
        {/* <Typography type="body-1">val fromUseParams='{fromUseParams}'</Typography> */}
      </TextContainer>
    </div>
  );
}

export { PageWithManyProps };    