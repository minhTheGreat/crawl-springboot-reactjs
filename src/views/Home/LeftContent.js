import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as NewsAction from '../../actions/newsAction'
import TableRowContent from './TableRowContent';

class LeftContent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentPage: 1
        }
    }
    componentDidMount() {
        this.props.actions.actGetHomeNews()
    }

    tabRow = (news) => {
        return news.map((newz, i) => {
            return <TableRowContent key={i} newz={newz} index={i} />
        })
    }
    
    render() {
        const { news } = this.props
        return (
            <div class="row" >

                {this.tabRow(news)}
            </div>
        )
    }

}
const mapStateToProps = state => ({
    news: state.news.news
})
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(NewsAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(LeftContent)
