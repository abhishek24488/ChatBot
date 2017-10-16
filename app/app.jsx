import React from "react";
import ReactDOM from "react-dom";
import { Router, Route,Switch, HashRouter} from 'react-router-dom';


import Home from "Home";

require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
require('style-loader!css-loader!foundation-sites/dist/css/foundation-float.css');

$(document).foundation();


require('style-loader!css-loader!sass-loader!../app/style/app.scss');


ReactDOM.render(
        <div>
            <p className="page-title">Welcome to Todo</p>
            <Home/>                
        </div>
        ,
    
    document.getElementById('app')
);

