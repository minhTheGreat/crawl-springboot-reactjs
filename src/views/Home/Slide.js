import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as NewsAction from '../../actions/newsAction'

import SliceItems from './SliceItems';

class Slide extends Component {
    constructor(props) {
        super(props)

        this.state = {
           
        }
    }



    componentDidMount() {
        this.props.actions.actGetSlice();
        this.props.actions.actGetSliceCenter();

    }
    tabRow = (news,s) => {
        return news.map((newz, i) => {
            return <SliceItems newz={newz} key={i} s={s} />
        })
    }
   

    render() {
        const { news,newsCenter } = this.props

        return (
            <div class="single-welcome-slide">
                <div class="row no-gutters">
                    <div class="col-12 col-lg-8" style={{style}}>
                       {this.tabRow(newsCenter,"style")}
                      
                    </div>

                    <div class="col-12 col-lg-4">
                        {this.tabRow(news,"style2")}
                    </div>
                </div>
            </div>
        )
    }
}
const style={
   img2:{
     width:'690px',
     height:'388px'
   }
}


const mapStateToProps = state => ({
    news: state.news.slice,
    newsCenter: state.news.slicec
})
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(NewsAction, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Slide)