import React, { useState } from 'react';
import './App.scss';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Navbar from './components/layout/Navbar';
import THEME from './components/style/theme';
import Home from './components/pages/Home/Home';

function App() {
  const [justify, setJustify] = useState(true);

  const justifyHandler = () => {
    setJustify(!justify);
  };

  return (
    <ThemeProvider theme={THEME}>
      <Router basename={process.env.PUBLIC_URL}>
        <GlobalStyle />
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/' render={(props) => <Home justifyHandler={justifyHandler} justify={justify} />} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => props.theme.light.white.darker};
  }
`;

export default App;
