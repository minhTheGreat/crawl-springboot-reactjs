import React, { Component } from 'react'
import Modal from 'react-responsive-modal';
import chain from '../../styles/style/img/core-img/chain.png'
import "moment/locale/vi"
import Moment from 'moment';
export default class SliceItems extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         open:false
      }
    }
    onOpenPopup = () => {
        this.setState({ open: true })
    }
    onClosePopup = () => {
        this.setState({ open: false })
    }
    
  render() {
      const {newz,s}= this.props
    return (
        <div class="welcome-posts--">
            <div class={s==="style" ? "welcome-post": "welcome-post style-2"} style={{display:'justify'}}>
            <img src={newz.image} alt="" style={s==="style" ?{width:'750px',height:'388.13px'}: {width:'330px',height:'194.06px'}} className="img2"/>
            <div class="post-content" data-animation="fadeInUp" data-delay="500ms" data-duration="500ms">
                <a href="#" class="tag tag-2" onClick={this.onOpenPopup}>{newz.categories.categoryName}</a>
                <a href="#" class="post-title"  onClick={this.onOpenPopup}> <div dangerouslySetInnerHTML={{ __html: newz.title }} /></a>
                <p>{Moment(newz.createdAt).format('MMM Do YY')}</p>
            </div>
        </div>
        <Modal open={this.state.open} onClose={this.onClosePopup} styles={modals} >
            <div >
                <a href={newz.link} style={{ backgroundColor: '#63B8FF', padding: '10px', borderRadius: '5px', color: '#fff' }}>
                    <img src={chain} style={{ verticalAlign: 'middle' }} />&nbsp; Link đến trang nguồn</a>
            </div>
            <br />
            <h1 style={{ borderTop: '0.5px solid #ddd', padding: '10px 0', fontFamily: "Bookman, Tahoma, Verdana" }}>
                <div dangerouslySetInnerHTML={{ __html: newz.title }} /></h1>
            <p >
                <h6><div><div dangerouslySetInnerHTML={{ __html: newz.description }} style={{ style }} /></div></h6>

                <div dangerouslySetInnerHTML={{ __html: newz.content }} style={style} />
            </p>

        </Modal>
        
    </div>
    )
  }
}
const style = {
    margin: '0 auto',
    padding: '10px',
    width: '100%',
    textAlign: 'justify',
    fontColor: '#000',
    fontFamily: "Bookman, Tahoma, Verdana",

}
const modals = {
    modal: {
        borderRadius: '9px',
        width: '700px',
    }

}
