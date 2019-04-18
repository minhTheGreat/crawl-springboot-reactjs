import React, { Component } from 'react';
import '../../styles/style/main.css';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as AuthAction from '../../actions/userActions'
class Header extends Component {
    constructor(props) {
      super(props)
    
      this.onClick= this.onClick.bind(this)
    }
    
    onClick(e){
        e.preventDefault();
        this.props.actions.logout()
    }
    render() {
        return (
          
                <header className="app-header"><a className="app-header__logo" href="index.html">YoungNews</a>
                    {/* Sidebar toggle button*/}
                    <a className="app-sidebar__toggle" href="/manager" data-toggle="sidebar" aria-label="Hide Sidebar" />
                    {/* Navbar Right Menu*/}
                    <ul className="app-nav">
                        <li className="app-search">
                         
                        </li>
                       
                        {/* User Menu*/}
                        <li className="dropdown">
            
                        <Link className="app-nav__item" to="/login" data-toggle="dropdown" onClick={this.onClick}>
                        <i className="fa fa-sign-out fa-lg" />
                        </Link></li>
                         
                    </ul>
                </header>

      
        )
    }
}
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(AuthAction, dispatch),
  })
  
  export default connect(null, mapDispatchToProps)(Header)
