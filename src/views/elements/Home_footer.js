import React, { Component } from "react";

class Home_footer extends Component {
  render() {
    return (
      <div>
        {/* ======== @Region: #footer ======== */}
        <footer
          id="footer"
          className="block block-bg-grey-dark"
          data-block-bg-img="img/bg_footer-map.png"
          data-stellar-background-ratio="0.4"
        >
          <div className="container">
            <div className="row" id="contact">
              <div className="col-md-3" id="LienHe">
                <address>
                  <strong>Liên hệ</strong>
                  <br />
                  <br />
                  <i className="fa fa-map-pin fa-fw text-primary" />
                  Tầng 3, Tòa nhà 3A, Ngõ 82 Duy Tân, Cầu Giấy, Hà Nội
                  <br />
                  <i className="fa fa-phone fa-fw text-primary" /> 033.9669.6699
                  <br />
                  <i className="fa fa-envelope-o fa-fw text-primary" />{" "}
                  itsolhn@gmail.com
                  <br />
                  <br />
                  <br />
                  <i className="fa fa-map-pin fa-fw text-primary" />
                  Đã Nẵng
                  <br />
                  <i className="fa fa-phone fa-fw text-primary" /> 033.6868.6688
                  <br />
                  <i className="fa fa-envelope-o fa-fw text-primary" />{" "}
                  itsoldn@gmail.com
                  <br />
                  <br />
                  <br />
                  <i className="fa fa-map-pin fa-fw text-primary" />
                  Hồ Chí Minh
                  <br />
                  <i className="fa fa-phone fa-fw text-primary" /> 033.6262.2268
                  <br />
                  <i className="fa fa-envelope-o fa-fw text-primary" />{" "}
                  itsolhcm@gmail.com
                  <br />
                </address>
              </div>
              <div className="col-md-6">
                <h4 className="text-uppercase">Gửi Phản Hồi</h4>
                <div className="form">
                  <div id="sendmessage">
                    Your message has been sent. Thank you!
                  </div>
                  <div id="errormessage" />
                  <form
                    action
                    method="post"
                    role="form"
                    className="contactForm"
                  >
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 4 chars"
                      />
                      <div className="validation" />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        data-rule="email"
                        data-msg="Please enter a valid email"
                      />
                      <div className="validation" />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 8 chars of subject"
                      />
                      <div className="validation" />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name="message"
                        rows={5}
                        data-rule="required"
                        data-msg="Please write something for us"
                        placeholder="Message"
                        defaultValue={""}
                      />
                      <div className="validation" />
                    </div>
                    <div className="text-center">
                      <button type="submit">Gửi Thư</button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-3">
                <h4 className="text-uppercase">Theo dõi:</h4>
                {/*social media icons*/}
                <div className="social-media social-media-stacked">
                  {/*@todo: replace with company social media details*/}
                  <a href="#">
                    <i className="fa fa-facebook fa-fw" /> Facebook
                  </a>
                  <a href="#">
                    <i className="fa fa-linkedin fa-fw" /> ITviec
                  </a>
                  <a href="#">
                    <i className="fa fa-google-plus fa-fw" /> Google+
                  </a>
                </div>
              </div>
            </div>
            <div className="row subfooter">
              {/*@todo: replace with company copyright details*/}
              <div className="col-md-7">
                <div className="credits">
                  Designed by{" "}
                  <a href="https://bootstrapmade.com/">SmartWeb ITSOL</a>
                </div>
              </div>
            </div>
            <a href="#top" className="scrolltop">
              Top
            </a>
          </div>
        </footer>
        {/* Required JavaScript Libraries */}
        {/* Template Specisifc Custom Javascript File */}
        {/*Custom scripts demo background & colour switcher - OPTIONAL */}
        {/*Contactform script */}
        {/*scroll click*/}
      </div>
    );
  }
}

export default Home_footer;
