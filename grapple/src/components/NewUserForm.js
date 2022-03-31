import React, { Component, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Col, Form as FormBS, Row } from "react-bootstrap";
import * as Yup from "yup";
import userInitObj from "../data/userInitObj";
import "./NewUserForm.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default class NewUserForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    // [loading, setLoading] = useState(false);
  }
  /*{
      email: Yup.string()
        .required("Email is required")
        .email("Email is invalid"),
      phone: Yup.string()
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(10, "Must be exactly 10 digits")
        .max(10, "Must be exactly 10 digits"),

      city: Yup.string(),
      province: Yup.string(),
      zip: Yup.string()
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(6, "Must be exactly 6 digits")
        .max(6, "Must be exactly 6 digits"),
}*/
  validationSchema() {
    return Yup.object().shape({
      fname: Yup.string().required("First name is required"),
      lname: Yup.string().required("Last name is required"),
      userId: Yup.string()
        .required("User ID is required")
        .min(4, "User ID must be at least 4 characters")
        .max(20, "User ID must not exceed 20 characters"),
      password: Yup.string()
        .required("Password is required")
        .min(4, "Password must be at least 4 characters")
        .max(40, "Password must not exceed 40 characters"),
      confirmPassword: Yup.string()
        .required("Confirm your Password!")
        .oneOf([Yup.ref("password"), null], "Passwords do not match."),
      address: Yup.object({
        city: Yup.string(),
        province: Yup.string(),
        zip: Yup.string()
          .matches(/^[0-9]+$/, "Must be only digits")
          .min(6, "Must be exactly 6 digits")
          .max(6, "Must be exactly 6 digits"),
      }),
      contact: Yup.object({
        email: Yup.string()
          .required("Email is required")
          .email("Email is invalid"),
        phone: Yup.array(
          Yup.string()
            .matches(/^[0-9]+$/, "Must be only digits")
            .min(10, "Must be exactly 10 digits")
            .max(10, "Must be exactly 10 digits")
        ),
      }),
      eduDetail: Yup.object({
        school: Yup.object({
          schoolName: Yup.string().required("School Name is required"),
          marks: Yup.string(),
        }),
        uni: Yup.object({
          uniName: Yup.string().required("University Name is required"),
          degree: Yup.string().required("Degree is required"),
          gradYear: Yup.number(),
        }),
      }),
      additionalDetail: Yup.object({
        socialLinks: Yup.array(Yup.string()),
        interests: Yup.array(Yup.string()),
        talents: Yup.array(Yup.string()),
        skills: Yup.array(Yup.string()),
        about: Yup.string().required("Oh c'mon, tell us about yourself."),
      }),
      pic: Yup.string(),
      acceptTerms: Yup.bool().oneOf(
        [true],
        "Can't proceed without accepting Terms"
      ),
    });
  }

  handleSubmit = async (data) => {
    // e.preventDefault();
    console.log("Hi handler.");
    // console.log(data);
    // alert(JSON.stringify(data, null, 2));
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      // setLoading(true);
      const { dataDB } = await axios.post("/api/users", data, config);
      // setLoading(false);
      localStorage.setItem(JSON.stringify(dataDB, null, 2));
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  render() {
    const initialValues = userInitObj;
    console.log(initialValues);
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
                <section>
                  <h4>Basic Details</h4>
                  <div className="form-group">
                    <label>First Name</label>
                    <Field name="fname" type="text" className="form-control" />
                    <ErrorMessage
                      name="fname"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <Field name="lname" type="text" className="form-control" />
                    <ErrorMessage
                      name="lname"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="userId"> User ID </label>
                    <Field name="userId" type="text" className="form-control" />
                    <ErrorMessage
                      name="userId"
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
                  {/* <FormBS>
                    <FormBS.Group controlId="pic">
                      <FormBS.Label>Profile Picture</FormBS.Label>
                      <FormBS.File
                        id="custom-file"
                        type="image/png"
                        label="Upload a picture of yours"
                        custom
                      />
                    </FormBS.Group>
                  </FormBS> */}
                </section>

                {/* <div className="form-group">
                  <label htmlFor="dob"> Date of Birth </label>
                  <Field name="dob" type="date" className="form-control" />
                  <ErrorMessage
                    name="dob"
                    component="div"
                    className="text-danger"
                  />
                </div> */}

                <section>
                  <h4>Contact Details</h4>
                  <div className="form-group">
                    <label htmlFor="contact.email"> Email </label>
                    <Field
                      name="contact.email"
                      type="email"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="contact.email"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact.phone.0"> Phone Number </label>
                    <Field
                      name="contact.phone.0"
                      type="text"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="contact.phone.0"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                </section>

                <section>
                  <h4>Residential Details</h4>
                  <div className="form-group">
                    <label htmlFor="address.city"> City </label>
                    <Field
                      name="address.city"
                      type="text"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="address.city"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address.province"> Province </label>
                    <Field
                      name="address.province"
                      type="text"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="address.province"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address.zip"> ZIP Code </label>
                    <Field
                      name="address.zip"
                      type="text"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="address.zip"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                </section>

                <section>
                  <h4>Education Details</h4>
                  <h6>School Details</h6>
                  <div className="form-group">
                    <label htmlFor="eduDetail.school.schoolName">
                      {" "}
                      School Name{" "}
                    </label>
                    <Field
                      name="eduDetail.school.schoolName"
                      type="text"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="eduDetail.school.schoolName"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="eduDetail.school.marks">
                      {" "}
                      Diploma Marks{" "}
                    </label>
                    <Field
                      name="eduDetail.school.marks"
                      type="text"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="eduDetail.school.marks"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <h6>University Details</h6>
                  <div className="form-group">
                    <label htmlFor="eduDetail.uni.uniName">
                      {" "}
                      University Name{" "}
                    </label>
                    <Field
                      name="eduDetail.uni.uniName"
                      type="text"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="eduDetail.uni.uniName"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="eduDetail.uni.degree">
                      {" "}
                      Degree Pursuing{" "}
                    </label>
                    <Field
                      name="eduDetail.uni.degree"
                      type="text"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="eduDetail.uni.degree"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="eduDetail.uni.gradYear">
                      {" "}
                      Graduation Year{" "}
                    </label>
                    <Field
                      name="eduDetail.uni.gradYear"
                      type="text"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="eduDetail.uni.gradYear"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                </section>

                <section>
                  <h4>Additional Details</h4>
                  <div className="form-group">
                    <label htmlFor="additionalDetail.socialLinks.0">
                      {" "}
                      Your Social Links{" "}
                    </label>
                    <Field
                      name="additionalDetail.socialLinks.0"
                      type="text"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="additionalDetail.socialLinks.0"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="additionalDetail.interests.0">
                      {" "}
                      Your Interests{" "}
                    </label>
                    <Field
                      name="additionalDetail.interests.0"
                      type="text"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="additionalDetail.interests.0"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="additionalDetail.talents.0">
                      {" "}
                      Your Talents{" "}
                    </label>
                    <Field
                      name="additionalDetail.talents.0"
                      type="text"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="additionalDetail.talents.0"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="additionalDetail.skills.0">
                      {" "}
                      Your Skills{" "}
                    </label>
                    <Field
                      name="additionalDetail.skills.0"
                      type="text"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="additionalDetail.skills.0"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="additionalDetail.about">
                      {" "}
                      About Yourself{" "}
                    </label>
                    <Field
                      name="additionalDetail.about"
                      type="textarea"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="additionalDetail.about"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                </section>

                <div className="form-group">
                  <label htmlFor="pic"> pic </label>
                  <Field name="pic" type="text" className="form-control" />
                  <ErrorMessage
                    name="pic"
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
                    I have read the Terms and I agree to them.
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

          <Row className="py-3">
            <Col>
              Already registered with us? <Link to="/login">Login here</Link>!
            </Col>
          </Row>
        </div>
      </>
    );
  }
}
