import React, { Component } from 'react'
import "moment/locale/vi"
import Moment from 'moment';
import logo from '../../styles/style/img/bg-img/18.jpg'
import chain from '../../styles/style/img/core-img/chain.png'
import 'react-responsive-modal/src/styles.css'
import Modal from 'react-responsive-modal'
export default class TableRowContent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false,
        }
    }
    onOpenPopup = () => {
        this.setState({ open: true })
    }
    onClosePopup = () => {
        this.setState({ open: false })
    }

    render() {
        Moment.locale('vi');
        const { newz } = this.props
        return (

            <div class="col-12 col-lg-6" >

                <div class="single-blog-post style-3">
                    <div class="post-thumb">
                        {newz.image === "" ? <a href={newz.link}><img src={logo} alt="" /></a>
                            : <a href="#" onClick={this.onOpenPopup}><img src={newz.image} alt="" /></a>}
                    </div>
                    <div class="post-data">
                        <a href="#" class="post-catagory cat-3">{newz.categories.categoryName}</a>
                        <a href="#" class="post-title" onClick={this.onOpenPopup}>
                            <h6><div dangerouslySetInnerHTML={{ __html: newz.title }} /></h6>
                        </a>
                        <div class="post-meta">
                            <p class="post-author">By <a href={newz.link}>VNexpress</a></p>

                            <p class="post-date">{Moment(newz.createdAt).format('MMM Do YY')}</p>
                        </div>
                    </div>
                    <Modal open={this.state.open} onClose={this.onClosePopup}>
                        <a href={newz.link} ><img src={chain}/>&nbsp; Link đến trang nguồn</a>
                        <br/>
                        <h1 style={{borderTop:'1px solid #999',margin:'15px 0'}}><div dangerouslySetInnerHTML={{ __html: newz.title }} /></h1>
                        <p >
                            <div dangerouslySetInnerHTML={{ __html: newz.content }} style={style}/>
                        </p>

                    </Modal>
                </div>

            </div>

        )
    }
}
const style = {
    margin:'0 auto',
    width:'600px',
 
}
