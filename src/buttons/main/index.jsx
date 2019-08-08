import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import loading from './media/loading.svg';
require("./media/demo.css")// css require

class MyButton extends React.PureComponent {
  render (){
    //  styled
    const TestStyledButton = styled.button`
      width:100px;
      height:100px;
      background:url(${loading}) no-repeat;
    `
    return (<TestStyledButton></TestStyledButton> );
  }
}

export default MyButton;