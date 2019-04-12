import React, { Component } from "react";

class Home_slideshow extends Component {
  render() {
    return (
      <div>
        {/*Change the background class to alter background image, options are: benches, boots, buildings, city, metro */}
        {/*Change the background class to alter background image, options are: benches, boots, buildings, city, metro */}
        <div
          id="background-wrapper"
          className="buildings"
          data-stellar-background-ratio="0.1"
        >
          <div className="hero" id="highlighted">
            <div className="inner" style={{ marginBottom: "15px" }}>
              {/*Slideshow*/}
              <div id="highlighted-slider" className="container">
                <div
                  className="item-slider"
                  data-toggle="owlcarousel"
                  data-owlcarousel-settings='{"singleItem":true, "navigation":true, "transitionStyle":"fadeUp"}'
                >
                  {/*Slideshow content*/}
                  {/*Slide 1*/}
                  <div className="item">
                    <div className="row">
                      <div className="col-md-6 col-md-push-6 item-caption">
                        <h2 className="h1 text-weight-light">
                          Welcome to <span className="text-primary">ITSOL</span>
                        </h2>
                        <h4>Nơi Sự Nghiệp Tỏa Sáng..!</h4>
                        <h4>Dịch vụ</h4>
                        <p>
                          Cung cấp Giải pháp và Nguồn lực trong lĩnh vực IT,
                          ITSOL chuyên sâu và chuyên nghiệp trong các dịch vụ
                          Cung cấp (Phái cử – Tuyển dụng) nhân lực trong lĩnh
                          vực IT, Tư vấn Giải pháp và Gia công/Phát triển các
                          Sản phẩm, Ứng dụng Phần mềm.
                        </p>
                      </div>
                      <div className="col-md-6 col-md-pull-6 hidden-xs">
                        <img
                          src="../Flexor/img/slides/Services1.jpg"
                          alt="Slide 1"
                          className="center-block img-responsive"
                        />
                      </div>
                    </div>
                  </div>
                  {/*Slide 2*/}
                  <div className="item">
                    <div className="row">
                      <div className="col-md-6 text-right-md item-caption">
                        <h2 className="h1 text-weight-light">
                          <span className="text-primary">ITSOL</span> Talents
                          Trusted Partner
                        </h2>
                        <h4>
                          Dịch vụ cung cấp (Phái cử và tuyển dụng) nguồn lực IT
                        </h4>
                        <p>
                          Cung cấp Giải pháp và Nguồn lực trong lĩnh vực IT,
                          ITSOL chuyên sâu và chuyên nghiệp trong các dịch vụ
                          Cung cấp (Phái cử – Tuyển dụng) nhân lực trong lĩnh
                          vực IT, Tư vấn Giải pháp và Gia công/Phát triển các
                          Sản phẩm, Ứng dụng Phần mềm.
                        </p>
                      </div>
                      <div className="col-md-6 hidden-xs">
                        <img
                          src="../Flexor/img/slides/Services3.jpg"
                          alt="Slide 2"
                          className="center-block img-responsive"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home_slideshow;
