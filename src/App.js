import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from "./pages/Main"

class App extends React.Component {

  render() {
    return (


      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Main} />
          </Switch>
        </div>
      </Router>

    );
  }
};

export default App;
