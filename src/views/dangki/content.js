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
            <h3 className="panel-title">
              Sign Up
            </h3>
          </div>
          <div className="panel-body">
            <form acceptCharset="UTF-8" role="form">
              <fieldset>
                <div className="form-group">
                  <div className="input-group input-group-lg">
                    <span className="input-group-addon"><i className="fa fa-fw fa-user" /></span>
                    <input type="text" className="form-control" placeholder="Username" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group input-group-lg">
                    <span className="input-group-addon"><i className="fa fa-fw fa-envelope" /></span>
                    <input type="text" className="form-control" placeholder="Email" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group input-group-lg">
                    <span className="input-group-addon"><i className="fa fa-fw fa-lock" /></span>
                    <input type="password" className="form-control" placeholder="Password" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="radio">
                    <label>
                      <input type="radio" name="optionsRadios" id="optionsRadios1" defaultValue="option1" defaultChecked />
                      Free Account
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input type="radio" name="optionsRadios" id="optionsRadios2" defaultValue="option2" />
                      Plus Account ($12/month)
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input type="radio" name="optionsRadios" id="optionsRadios3" defaultValue="option3" />
                      Corporate Account ($100month)
                    </label>
                  </div>
                </div>
                <div className="checkbox">
                  <label>
                    <input name="remember" type="checkbox" defaultValue="Terms" />
                    I agree to the <a href="#">terms and conditions</a>.
                  </label>
                </div>
                <input className="btn btn-lg btn-primary btn-block" type="submit" defaultValue="Sign Me Up" />
              </fieldset>
            </form>
            <p className="m-b-0 m-t">Already signed up? <a href="login.html">Login here</a>.</p>
            <div className="credits">
              
              Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
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
