import React, { Component } from 'react'
import LeftContent from './LeftContent'
import Pagination from '../../pagination/Pagination'
export default class Content extends Component {
    
    render() {
        return (
            <div>
                <div class="viral-story-blog-post section-padding-0-50">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 col-lg-8">                            

                                 <LeftContent/>
                                
                            </div>
                            <div class="col-12 col-lg-3">
                                <div class="sidebar-area">

                                    <div class="treading-articles-widget mb-70">
                                        <h4>Trending Articles</h4>

                                        <div class="single-blog-post style-4">
                                            <div class="post-thumb">
                                                <a href="#"><img src="img/bg-img/15.jpg" alt="" /></a>
                                                <span class="serial-number">01.</span>
                                            </div>
                                            <div class="post-data">
                                                <a href="#" class="post-title">
                                                    <h6>This Is How Notebooks Of An Artist Who Travels Around The World Look</h6>
                                                </a>
                                                <div class="post-meta">
                                                    <p class="post-author">By <a href="#">Michael Smithson</a></p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="single-blog-post style-4">
                                            <div class="post-thumb">
                                                <a href="#"><img src="img/bg-img/16.jpg" alt="" /></a>
                                                <span class="serial-number">02.</span>
                                            </div>
                                            <div class="post-data">
                                                <a href="#" class="post-title">
                                                    <h6>Artist Recreates People’s Childhood Memories With Realistic Dioramas</h6>
                                                </a>
                                                <div class="post-meta">
                                                    <p class="post-author">By <a href="#">Michael Smithson</a></p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="single-blog-post style-4">
                                            <div class="post-thumb">
                                                <a href="#"><img src="img/bg-img/17.jpg" alt="" /></a>
                                                <span class="serial-number">03.</span>
                                            </div>
                                            <div class="post-data">
                                                <a href="#" class="post-title">
                                                    <h6>Artist Recreates People’s Childhood Memories With Realistic Dioramas</h6>
                                                </a>
                                                <div class="post-meta">
                                                    <p class="post-author">By <a href="#">Michael Smithson</a></p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>


                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div class="viral-news-pagination">
                                    <nav aria-label="Page navigation example">
                                        <Pagination />
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
