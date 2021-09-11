import React from "react";
import { NavLink } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <React.Fragment>
      <section class="vh-100">
        <div class="container-fluid h-custom">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.png"
                class="img-fluid"
                alt="Sample image"
              />
            </div>

            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                Login
              </p>
              <form>
                <div className="d-flex flex-row align-items-center mb-4">
                  <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                  <i class="zmdi zmdi-email pr-2"></i>
                  <div className="form-outline flex-fill mb-0">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      placeholder="Enter a valid email address"
                    />
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                  <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                  <i class="zmdi zmdi-lock pr-2"></i>
                  <div className="form-outline flex-fill mb-0">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="form-control"
                      placeholder="Enter Password"
                    />
                  </div>
                </div>
                <div class="text-center text-lg-start mt-4 pt-2">
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" className="btn btn-outline-primary ">
                      Log In
                    </button>
                  </div>
                  <p class="small fw-bold mt-2 pt-1 mb-0">
                    <div className="dont" >
                      <NavLink className="dontAcc" to="/signup">
                        Don't have an <span> Account?</span>
                      </NavLink>
                    </div>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Login;
