import React, { Component } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export default class NewUserForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validationSchema() {
    return Yup.object().shape({
      firstname: Yup.string().required("First name is required"),
      lastname: Yup.string().required("Last name is required"),
      username: Yup.string()
        .required("Username is required")
        .min(4, "Username must be at least 4 characters")
        .max(20, "Username must not exceed 20 characters"),
      email: Yup.string()
        .required("Email is required")
        .email("Email is invalid"),
      password: Yup.string()
        .required("Password is required")
        .min(4, "Password must be at least 4 characters")
        .max(40, "Password must not exceed 40 characters"),
      confirmPassword: Yup.string()
        .required("Confirm Password is required")
        .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
      dob: Yup.date().required("Date of Birth is required"),
      city: Yup.string(),
      province: Yup.string(),
      zip: Yup.string()
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(6, "Must be exactly 6 digits")
        .max(6, "Must be exactly 6 digits"),
        // .nullabe(true)
        // .transform((_, val) => val ? Number(val) : null),
      phone: Yup.string()
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(10, "Must be exactly 10 digits")
        .max(10, "Must be exactly 10 digits"),
        // .nullabe(true)
        // .transform((_, val) => val ? Number(val) : null),
      acceptTerms: Yup.bool().oneOf([true], "Accept Terms is required"),
    });
  }

  handleSubmit(data) {
    console.log(JSON.stringify(data, null, 2));
  }

  render() {
    const initialValues = {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      dob: "",
      city: "",
      province: "",
      zip: "",
      phone: "",
      acceptTerms: false,
    };
    return (
      <>
        <div className="register-form container mt-3 px-5">
          <Formik
            initialValues={initialValues}
            validationSchema={this.validationSchema}
            onSubmit={this.handleSubmit}
          >
            {({ resetForm }) => (
              <Form className="">
                <div className="form-group">
                  <label>First Name</label>
                  <Field
                    name="firstname"
                    type="text"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="firstname"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <Field name="lastname" type="text" className="form-control" />
                  <ErrorMessage
                    name="lastname"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="username"> Username </label>
                  <Field name="username" type="text" className="form-control" />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email"> Email </label>
                  <Field name="email" type="email" className="form-control" />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password"> Password </label>
                  <Field
                    name="password"
                    type="password"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword"> Confirm Password </label>
                  <Field
                    name="confirmPassword"
                    type="password"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="dob"> Date of Birth </label>
                  <Field name="dob" type="date" className="form-control" />
                  <ErrorMessage
                    name="dob"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="city"> City </label>
                  <Field name="city" type="text" className="form-control" />
                  <ErrorMessage
                    name="city"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="province"> Province </label>
                  <Field name="province" type="text" className="form-control" />
                  <ErrorMessage
                    name="province"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="zip"> ZIP Code </label>
                  <Field name="zip" type="text" className="form-control" />
                  <ErrorMessage
                    name="zip"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone"> Phone Number </label>
                  <Field name="phone" type="text" className="form-control" />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="form-group form-check">
                  <Field
                    name="acceptTerms"
                    type="checkbox"
                    className="form-check-input"
                  />
                  <label htmlFor="acceptTerms" className="form-check-label">
                    I have read and agree to the Terms
                  </label>
                  <ErrorMessage
                    name="acceptTerms"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="form-group my-2">
                  <button type="submit" className="btn btn-primary mx-2">
                    Register
                  </button>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="btn btn-warning float-right"
                  >
                    Reset
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </>
    );
  }
}
