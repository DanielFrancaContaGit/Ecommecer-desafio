import React from 'react';
import { withRouter } from 'react-router-dom';
import './page404.css';

function Page404() {
  return (
    <strong className="page404">404</strong>
  );
}

export default withRouter(Page404);
