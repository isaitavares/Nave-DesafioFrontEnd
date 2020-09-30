import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../components/buttons/buttons';
import ContentContainer from '../components/containers/contentContainer';

function index(){
    return(
        <React.Fragment>
          <ContentContainer>
            <Button />
          </ContentContainer>
        </React.Fragment>
    );
  }

export default index  