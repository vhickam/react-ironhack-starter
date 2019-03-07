import React, { Component, Fragment, useState, useEffect } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import {styles} from './utls/styles/helpers';

const { 
  colors: {navBarGray}
} = styles

const NavBar = styled.div`
  width:100%
  height: 70px;
  background-color: ${navBarGray};
  color: ${props => (props.color ? 'white' : 'red')};
`

const payload = {
  firstName: 'alejandro',
  preferredName: 'Alex'
};

export const Clock = (props) => (
  <Fragment>
    <NavBar color={props.isWhite}>{props.time}</NavBar>
    <h1>{props.time}</h1>
    <p label="name">By: {props.getName(payload)}</p>
  </Fragment>

);

const App = () => {
  const [state, setState] = useState({time: new Date() });

  const currentTime = () => setState({time: new Date() });

 

  useEffect(() => {
    setInterval(() => currentTime(), 1000);
  }, []);

  const getName = args => `${args.preferredName || args.firstName}`;

  
    return (<Clock getName={getName} time={state.time.toLocaleTimeString()} isWhite={state.isColorWhite}></Clock>)
   
  
}

export default App;

