import React from "react";
import { NavLink } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  return (
    <React.Fragment>
      <section className="pt-5 vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <i class="zmdi zmdi-account pr-2"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              name="name"
                              id="name"
                              className="form-control"
                              placeholder="Name"
                              autoComplete="off"
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <i class="zmdi zmdi-email pr-2"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              name="email"
                              id="email"
                              className="form-control"
                              placeholder="Email"
                              autoComplete="off"
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <i class="zmdi zmdi-phone-in-talk pr-2"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="phone"
                              id="Phone"
                              name="phone"
                              className="form-control"
                              placeholder="Phone"
                              autoComplete="off"
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <i class="zmdi zmdi-group-work pr-2"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              name="profession"
                              id="profession"
                              className="form-control"
                              placeholder="Profession"
                              autoComplete="off"
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
                              placeholder="Password"
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <i class="zmdi zmdi-lock pr-2"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              name="cpassword"
                              id="cpassword"
                              className="form-control"
                              placeholder="Confirm Password"
                            />
                          </div>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="button"
                            className="btn btn-outline-primary"
                          >
                            Create Account
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="row col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png"
                        className="img-fluid signupImg"
                        alt="Sample image"
                      />
                      <div className="already">
                        <NavLink className="alreadyText" to="/login">
                          I am already registered
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default SignUp;
