import React, { Component } from "react";
import {Link} from 'react-router-dom'
class Home_navigation extends Component {
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
          {/* ======== @Region: #navigation ======== */}
          <div id="navigation" className="wrapper">
            {/*Header & navbar-branding region*/}
            <div className="header">
              <div className="header-inner container">
                <div className="row">
                  <div className="col-md-8">
                    {/*navbar-branding/logo - hidden image tag & site name so things like Facebook to pick up, actual logo set via CSS for flexibility */}
                    <a className="navbar-brand" href="" title="Home">
                      <img src="../Flexor/img/logo_1.png" alt="Flexor Logo" />
                    </a>
                    <div className="navbar-slogan">
                      Đối tác tin cậy về
                      <br /> Giải Pháp và Nguồn Lực IT
                      <br /> Nơi Sự Nghiệp Tỏa Sáng..!
                    </div>
                  </div>
                  {/*header rightside*/}
                  <div className="col-md-4">
                    {/*user menu*/}
                    <ul className="list-inline user-menu pull-right">
                      <li className="user-register">
                        <i className="fa fa-edit text-primary " />{" "}
                        <a href="" className="text-uppercase">
                          Register
                        </a>
                      </li>
                      <li className="user-login">
                        <i className="fa fa-sign-in text-primary" />{" "}
                        <a href="" className="text-uppercase">
                          Login
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="navbar navbar-default">
                {/*mobile collapse menu button*/}
                <button
                  type="button"
                  className="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target=".navbar-collapse"
                  aria-expanded="false"
                >
                  {" "}
                  <span className="sr-only">Toggle navigation</span>{" "}
                  <span className="icon-bar" /> <span className="icon-bar" />{" "}
                  <span className="icon-bar" />{" "}
                </button>
                {/*social media icons*/}
                <div className="navbar-text social-media social-media-inline pull-right">
                  {/*@todo: replace with company social media details*/}
                  <div className="search-container">
                    <form action="">
                      <input
                        type="text"
                        placeholder="Tìm kiếm.."
                        name="search"
                      />
                      <button type="submit">
                        <i className="fa fa-search" />
                      </button>
                    </form>
                  </div>
                  <a
                    href="https://www.facebook.com/groups/287553211395337/"
                    target="_blank"
                  >
                    <i className="fa fa-facebook" />
                  </a>
                  <a
                    href="https://itviec.com/nha-tuyen-dung/itsol"
                    target="_blank"
                  >
                    <i className="fa fa-linkedin" />
                  </a>
                  <a
                    href="https://itviec.com/nha-tuyen-dung/itsol"
                    target="_blank"
                  >
                    <i className="fa fa-google-plus" />
                  </a>
                </div>
                {/*everything within this div is collapsed on mobile*/}
                <div className="navbar-collapse collapse">
                  <ul className="nav navbar-nav" id="main-menu">
                    <li className="icon-link">
                      <a href="">
                        <i className="fa fa-home" />
                      </a>
                    </li>
                    <li className="dropdown">
                      <a
                        href=""
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Lĩnh vực
                        <b className="caret" />
                      </a>
                      {/* Dropdown Menu */}
                      <ul className="dropdown-menu">
                        <li>
                          <a href="#" tabIndex={-1} className="menu-item">
                            Web
                          </a>
                        </li>
                        <li>
                          <a href="#" tabIndex={-1} className="menu-item">
                            Mobile App
                          </a>
                        </li>
                        <li>
                          <a href="#" tabIndex={-1} className="menu-item">
                            Backend
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/home/about">Về chúng tôi</Link>
                    </li>
                    <li>
                      <a href="">Tin Tức</a>
                    </li>
                    {/*Link scroll click*/}
                    <li>
                      <a href="#LienHe">Liên Hệ</a>
                    </li>
                  </ul>
                </div>
                {/*/.navbar-collapse */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home_navigation;
