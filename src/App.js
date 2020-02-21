import React, { Component } from 'react';

import { Link, Route } from 'react-router-dom';

import asyncComponent from './hoc/asyncComponent/asyncComponent';

const AsyncPizza = asyncComponent(() =>{
    return import('./containers/Pizza');
});

const AsyncUser = asyncComponent(() =>{
    return import('./containers/User');
});

class App extends Component{
    render(){
        return(
            <div>
                <header>
                    <Link to="/" >User</Link>
                    <Link to="/pizza">Pizza</Link>
                </header>
                <div>
                    <Route path="/" Component={AsyncUser} />
                    <Route path="/pizza" Component={AsyncPizza} />
                </div>
            </div>
        );
    }
}

export default App;
