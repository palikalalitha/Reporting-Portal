import React from 'react'

import {
    BrowserRouter as Router,
    Link,
    Redirect
}
from "react-router-dom";
class Home extends React.Component {
    render() {
        return (
            <div>
            <nav>
            <ul>
                <li>
                    <Link to="/reporting-portal/sign-in/">Reporting Portal</Link >
                </li>
                <li>
                    <Link to="/reporting-portal/user-page/">Reporting Portal</Link >
                </li>
               
              </ul>
        </nav>     
    </div>)
    }
}
export {Home}