import React, { Component } from 'react'
import LeftContent from './LeftContent'
import Pagination from '../../pagination/Pagination'
import RightContent from './RightContent';
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

                                    <RightContent/>

                                </div>
                            </div>


                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div class="viral-news-pagination">
                                    <nav aria-label="Page navigation example">
                                      
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
