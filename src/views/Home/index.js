import React, { Component } from 'react'
import '../../styles/style/style.css';
import '../../styles/style/js/active';

import Content from './Content';
import Footer from './Footer';
export default class Home extends Component {
    render() {
        return (
            <div style={{fontFamily:"Bookman, Tahoma, Verdana"}}>
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
                                            <li class="active"><a href="catagory.html">Top 10</a></li>
                                            <li><a href="index.html">Funny</a></li>
                                            <li><a href="index.html">Videos</a></li>
                                            <li><a href="index.html">Don’t Miss</a></li>
                                            <li><a href="#">Mega Menu</a>
                                            </li>
                                        </ul>
                                        <div class="add-post-button">
                                            <a href="#" class="btn add-post-btn">Add Post</a>
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

                                    <div class="single-welcome-slide">
                                        <div class="row no-gutters">
                                            <div class="col-12 col-lg-8">
                                                <div class="welcome-post">
                                                    <img src="img/bg-img/bg1.jpg" alt="" />
                                                    <div class="post-content" data-animation="fadeInUp" data-duration="500ms">
                                                        <a href="#" class="tag">Travel</a>
                                                        <a href="#" class="post-title">10 Tips to travel in style for less</a>
                                                        <p>1 day ago</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-12 col-lg-4">
                                                <div class="welcome-posts--">
                                                    <div class="welcome-post style-2">
                                                        <img src="img/bg-img/bg2.jpg" alt="" />
                                                        <div class="post-content" data-animation="fadeInUp" data-delay="500ms" data-duration="500ms">
                                                            <a href="#" class="tag tag-2">Celebs</a>
                                                            <a href="#" class="post-title">Superstar spoted with new boyfriend</a>
                                                            <p>1 day ago</p>
                                                        </div>
                                                    </div>

                                                    <div class="welcome-post style-2">
                                                        <img src="img/bg-img/bg3.jpg" alt="" />
                                                        <div class="post-content" data-animation="fadeInUp" data-delay="750ms" data-duration="500ms">
                                                            <a href="#" class="tag tag-3">4 Fun</a>
                                                            <a href="#" class="post-title">Festival looks for all the party people</a>
                                                            <p>1 day ago</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Content/>
                <Footer/>
            </div>
        )
    }
}
