import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Time50 from "./TimeLine50";
import Time60 from "./TimeLine60";
import Time70 from "./TimeLine70";
import Intro from "./Intro";

import styled from "styled-components";

const StyledMainDiv = styled.div`
  max-height: calc(100vh - 66px);
  overflow-y: auto;
`;

const App = () => {

  return (
      <Router>
        <StyledMainDiv>
          <Switch>
              <Route path="/timeline50">
                  <Time50/>
              </Route>
              <Route path="/timeline60">
                  <Time60/>
              </Route>
              <Route path="/timeline70">
                  <Time70/>
              </Route>
              <Route path="/info">
                  <Intro/>
              </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        </StyledMainDiv>
      </Router>
  );
};

export default App;
