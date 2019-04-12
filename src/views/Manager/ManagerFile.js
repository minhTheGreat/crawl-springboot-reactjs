import React, { Component } from 'react'
import { connect } from 'react-redux'

export class ManagerFile extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    return (
      <div>
      <div class="app-title">
      <div>
        <h1><i class="fa fa-file-text"></i>&nbsp; Quản lí hồ sơ</h1>
        <p></p>
      </div>
      <ul class="app-breadcrumb breadcrumb">
        <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
        <li class="breadcrumb-item"><a href="#">Hồ sơ</a></li>
      </ul>
    </div>

    <div class="row">
      <div class="col-lg-7">
          <p class="bs-component ">
            <a href="addcandidate.html">
              <button class="btn btn-primary btn-right" type="button">+ Thêm</button>
            </a>
          </p>
      </div>
      <div class="col-md-12">
        <div class="tile">
          <div class="tile-body">
            <table class="table table-hover table-bordered" id="sampleTable">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Họ</th>
                  <th>Tên</th>
                  <th>Ngày sinh</th>
                  <th>Email</th>
                  <th>Số điện thoại</th>
                  <th>CV</th>
                  <th>Nội dung</th>
                  <th>Thực hiện</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Nguyễn</td>
                  <td>
                      Hiếu
                  </td>
                  <td>1997</td>
                  <td>abc@gmail.com</td>
                  <td>0123456789</td>
                  <td>nội dung nội dung nội dung</td>
                  <td>nội dung nội dung nội dung</td>
                  <td>
                    <a href="editcandidate.html"><i class="fa fa-lg fa-edit"></i></a> &nbsp
                    <a href="#"><i class="fa fa-lg fa-trash"></i></a>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagerFile)
