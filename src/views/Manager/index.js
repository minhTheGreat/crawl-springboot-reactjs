import React, { Component } from 'react'
import * as AuthAction from '../../actions/userActions';
import { connect } from 'react-redux'
import { bindActionCreators } from 'C:/Users/Admin/AppData/Local/Microsoft/TypeScript/3.3/node_modules/redux';
import '../../styles/style/main.css';
import { Link, Router, Switch, Route } from 'react-router-dom';
import {Image,Transformation} from 'cloudinary-react'
import history from '../../Config/history'
import Header from '../elements/Header'
import routes from '../../router/routes'
import Menu from '../elements/Menu';

class Manager extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  componentDidMount(){
    if (this.props.authentication.loggedIn) {
      this.props.actions.getUser()
    }

  }

  showContent = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, i) => {
        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      })
    }
    return result
  }
  render() {
    const { name,avatar } = this.props.authentication
    return (
      <div>
        <Router history={history}>
          <div>
            <Header />
            {/* Navbar*/}
            {/* Sidebar menu*/}
            <body className="app sidebar-mini rtl">
            <div className="app-sidebar__overlay" data-toggle="sidebar" />
            <aside className="app-sidebar">
              <div className="app-sidebar__user">
              <img src={avatar} style={{height:'3em',width:'3em',borderRadius:'50%'}} alt="Avatar" /> &nbsp;
                <div>
                  <p className="app-sidebar__user-name">{name}</p>
                  <p className="app-sidebar__user-designation">Always tell the truth</p>
                </div>
              </div>

              <ul className="app-menu">
                <Menu />
              </ul>
            </aside>
            <main className="app-content">
              <Switch>
                {this.showContent(routes)}
              </Switch>
            </main>
            </body>
          </div>
        </Router>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(AuthAction, dispatch),
})

const mapStateToProps = state => ({
  authentication: state.authentication,
})

export default connect(mapStateToProps, mapDispatchToProps)(Manager)
