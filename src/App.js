import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Test from "./testFile";

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
              <Route path="/test">
                  <Test/>
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
