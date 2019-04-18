import React, { Component } from 'react'
import '../../styles/style/style.css';
import '../../styles/style/js/active';

import Content from './Content';
import Footer from './Footer';
import Slide from './Slide';
export default class Home extends Component {
    render() {
        return (
            <div style={{ fontFamily: "Bookman, Tahoma, Verdana" }}>
                <div class="top-header-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="top-header-content d-flex align-items-center justify-content-between">
                                    <div class="top-breaking-news-area">
                                        <div id="breakingNewsTicker" class="ticker">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="viral-news-main-menu" id="stickyMenu">
                    <div class="classy-nav-container breakpoint-off">
                        <div class="container">
                            <nav class="classy-navbar justify-content-between" id="viralnewsNav">

                                <a class="nav-brand" href="index.html"><img src="img/core-img/logo.png" alt="Logo" /></a>

                                <div class="classy-navbar-toggler">
                                    <span class="navbarToggler"><span></span><span></span><span></span></span>
                                </div>

                                <div class="classy-menu">

                                    <div class="classycloseIcon">
                                        <div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>
                                    </div>

                                    <div class="classynav">
                                        <ul>
                                            <li class="active"><a href="catagory.html">Thời sự</a></li>
                                            <li><a href="index.html">Thế giới</a></li>
                                            <li><a href="index.html">Kinh doanh</a></li>
                                            <li><a href="index.html">Giải trí</a></li>
                                            <li><a href="#">Thể thao</a>
                                            </li>
                                        </ul>
                                        <div class="add-post-button">
                                            <a href="#" class="btn add-success-btn">Login</a>
                                        </div>

                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <div class="hero-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="hero-slides owl-carousel">
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="welcome-slide-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="welcome-slides owl-carousel">

                                    <Slide />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Content />
                <Footer />
            </div>
        )
    }
}
