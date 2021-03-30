import React from 'react'
import {withRouter} from 'react-router-dom';
import ReactGA from 'react-ga';

const RouteTracker = ({history}) => {

  history.listen((location, action) => {
    ReactGA.set({page: location.pathname});
    ReactGA.pageview(location.pathname);
  });

  return <div/>;
};

export default withRouter(RouteTracker);
