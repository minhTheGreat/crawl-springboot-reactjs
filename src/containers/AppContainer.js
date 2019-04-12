import React, { Component } from 'react'
import {Router,Switch,Route,withRouter} from 'react-router-dom';
import history from '../Config/history';
import {connect} from 'react-redux'
//Component for route
import Home from '../views/Home'
import Login from '../views/Login';
import  Register  from '../views/Register';
import PrivateRoute from '../router/PrivateRouter';
import Manager from '../views/Manager';
import NotFound from '../views/elements/NotFound'

class AppContainer extends Component {
  render() {
    return (
        <Router history={history}>
        <div className="App">
            <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/home" exact component={Home}/>
            <PrivateRoute path="/manager" component={Manager}/>
            <Route  path="/login" exact component={Login} />
            <Route path="/register" exact component={Register}/>
            <Route path='' component={NotFound}/>
            </Switch>
        </div>
    </Router>
    )
  }
}

const mapStateToProps = state => ({
    authentication: state.authentication,
  })
  export default connect(mapStateToProps)(AppContainer)
  
