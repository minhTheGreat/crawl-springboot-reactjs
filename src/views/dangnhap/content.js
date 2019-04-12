import React, { Component } from "react";

class Content extends Component {
  render() {
    return (
      <div>
        {/* ======== @Region: #content ======== */}
        <div id="content">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">Login</h3>
                </div>
                <div className="panel-body">
                  <form acceptCharset="UTF-8" role="form">
                    <fieldset>
                      <div className="form-group">
                        <div className="input-group input-group-lg">
                          <span className="input-group-addon">
                            <i className="fa fa-fw fa-envelope" />
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="input-group input-group-lg">
                          <span className="input-group-addon">
                            <i className="fa fa-fw fa-lock" />
                          </span>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                          />
                        </div>
                      </div>
                      <div className="checkbox">
                        <label>
                          <input
                            name="remember"
                            type="checkbox"
                            defaultValue="Remember Me"
                          />
                          Remember Me
                        </label>
                      </div>
                      <input
                        className="btn btn-lg btn-primary btn-block"
                        type="submit"
                        defaultValue="Login"
                      />
                    </fieldset>
                  </form>
                  <p className="m-b-0 m-t">
                    Not signed up? <a href="register.html">Sign up here</a>.
                  </p>
                  <div className="credits">
                    {/*
        All the links in the footer should remain intact.
        You can delete the links only if you purchased the pro version.
        Licensing information: https://bootstrapmade.com/license/
        Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=Flexor
      */}
                    Designed by{" "}
                    <a href="https://bootstrapmade.com/">BootstrapMade</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /row */}
        </div>
      </div>
    );
  }
}

export default Content;
