import React from "react";
import "./Login.css";
import todoTick from "../assets/todoTick.svg";
import trophy from "../assets/trophy.svg";
import { Formik } from "formik";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-left-container">
        <div className="login-logo">
          <img src={todoTick} alt="todoLogo" />
          <h3>Start Me Up</h3>
        </div>
        <div className="preview-section">
          <div className="points-tile-card">
            <h4>Points on every completed task</h4>
            <img src={trophy} alt="trophy" />
            <p>Points</p>
            <h3>150,234</h3>
          </div>
          <div className="preview-todo-card">
            <p>Drink Water</p>
            <button>Private</button>
          </div>

          <div></div>
        </div>
      </div>
      <div className="login-right-container">
        <div className="login-logo-mobile">
          <img src={todoTick} alt="todoLogo" />
          <h3>Start Me Up</h3>
        </div>
        <div className="login-form">
          <div className="login-welcome-text">
            <h1 className="greet">Welcome Back!</h1>
            <p>
              Start Managing Your Day Effiectively and increase productivity
            </p>
          </div>
          <Formik
            initialValues={{ username: "", password: "" }}
            //   validationSchema={validateSchema}
            onSubmit={(values) => {
              // dispatch(login(values))
              //   .unwrap()
              //   .then(() => navigate("/"));
            }}
          >
            {(formik) => (
              <form
                className="login-form-container"
                onSubmit={formik.handleSubmit}
              >
                <div className="email-input">
                  <label htmlFor="email">UserName</label>&nbsp;&nbsp;
                  <input
                    id="username"
                    name="username"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    placeholder="Enter your username"
                  />
                  {formik.errors.username && formik.touched.username ? (
                    <div className="error">{formik.errors.username}</div>
                  ) : null}
                </div>
                <div className="password-input">
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    placeholder="Enter your password"
                  />
                  {formik.errors.password && formik.touched.password ? (
                    <div className="error">{formik.errors.password}</div>
                  ) : null}
                </div>
                <div className="submit-btn">
                  <button type="submit">Login</button>
                </div>
                <div className="signup-link">
                  <p>
                    Don't have an account? &nbsp;
                    <Link to="/signup">Sign Up</Link>
                  </p>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
