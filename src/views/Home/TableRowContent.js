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
                    <Modal open={this.state.open} onClose={this.onClosePopup} styles={modals} >
                        <div >
                        <a href={newz.link} style={{backgroundColor:'#63B8FF',padding:'10px',borderRadius:'5px',color:'#fff'}}>
                        <img src={chain} style={{verticalAlign:'middle'}}/>&nbsp; Link đến trang nguồn</a>
                        </div>
                        <br/>
                        <h1 style={{borderTop:'0.5px solid #ddd',padding:'10px 0',fontFamily:"Bookman, Tahoma, Verdana"}}>
                        <div dangerouslySetInnerHTML={{ __html: newz.title }} /></h1>
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
    padding:'10px',
    width:'100%',
    textAlign:'justify',
    fontColor:'#000',
    fontFamily:"Bookman, Tahoma, Verdana",
    
}
const modals={
    modal:{
        borderRadius:'9px',
        width:'700px',
    }
    
}
