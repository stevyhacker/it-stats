import React from 'react'
import {useNavigate, useLocation} from 'react-router';
import ReactGA from 'react-ga';

export default function withRouter (Component) {
    const Wrapper = (props) => {
        const history = useNavigate();
        const location = useLocation();
        ReactGA.set({page: location.pathname});
        ReactGA.pageview(location.pathname);
        return <div/>;
    }
    return Wrapper;
}
