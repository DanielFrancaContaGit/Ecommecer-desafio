import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Browser,
  Switch,
  Route,
} from 'react-router-dom';
import App from './view/App/App';
import Page404 from './view/page404';

function Core() {
  return (
    <Browser>
      <Switch>
        <Route exact path="/" component={App} />
        <Route component={Page404} />
      </Switch>
    </Browser>
  );
}

ReactDOM.render(<Core />, document.getElementById('root'));
