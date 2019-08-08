import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import logo from './media/logo.svg';
require("./media/demo.css")// css require

class MyButton extends React.PureComponent {
  render (){
    //  styled
    const TestStyledButton = styled.button`
      width:100px;
      height:100px;
      background:url(${logo}) no-repeat;
    `
    return (<TestStyledButton></TestStyledButton> );
  }
}

export default MyButton;