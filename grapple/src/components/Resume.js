import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import jsPDF from "jspdf";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { userDataAction } from "../actions/userActions";
import { listAchs } from "../actions/achActions";
import ErrorMessage from "./ErrorMessage";
import Loading from "./Loading";

const Resume = ({ match }) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);
  const { loading, userInfo: ui, error } = userData;
  const achList = useSelector((state) => state.achList);
  const { loading: loadingAch, achs, error: errorAch } = achList;
  const history = useHistory();
  useEffect(() => {
    dispatch(userDataAction(match.params.id));
    dispatch(listAchs());
  }, [dispatch, history]);

  const generatePDF = () => {
    const doc = new jsPDF();
    const {
      fname,
      lname,
      additionalDetail: { about, socialLinks, interests, talents, skills },
      address: { city, province, zip },
      contact: { email, phone },
      eduDetail: {
        school: { schoolName, marks },
        uni: { uniName, degree, gradYear },
      },
      points,
    } = ui;
    doc.setFont("times", "bold");
    doc.setFontSize(20);
    doc.text(`${fname + " " + lname}`, 10, 10);
    doc.setFontSize(14);
    doc.text("Grapple Score", 140, 10);
    doc.setFont("times", "normal");
    doc.text(":  " + points.toString(), 180, 10);

    doc.setFont("times", "normal");
    doc.setFontSize(12);
    doc.text(about, 20, 15, { maxWidth: 180 });

    //
    doc.setFont("times", "bold");
    doc.setFontSize(14);
    doc.text("Contact", 20, 25);

    doc.setFontSize(12);
    doc.text("Email", 25, 30);
    doc.setFont("times", "normal");
    doc.text(":  " + email, 45, 30);

    doc.setFontSize(12);
    doc.setFont("times", "bold");
    doc.text("Phone", 25, 35);
    doc.setFont("times", "normal");
    doc.text(":  " + phone, 45, 35);
    //
    doc.setFont("times", "bold");
    doc.setFontSize(14);
    doc.text("Address", 20, 45);

    doc.setFontSize(12);
    doc.text("City", 25, 50);
    doc.setFont("times", "normal");
    doc.text(":  " + city, 45, 50);

    doc.setFontSize(12);
    doc.setFont("times", "bold");
    doc.text("Province", 25, 55);
    doc.setFont("times", "normal");
    doc.text(":  " + province, 45, 55);

    doc.setFontSize(12);
    doc.setFont("times", "bold");
    doc.text("ZIP Code", 25, 60);
    doc.setFont("times", "normal");
    doc.text(":  " + zip, 45, 60);
    //
    doc.setFont("times", "bold");
    doc.setFontSize(14);
    doc.text("School Details", 20, 70);

    doc.setFontSize(12);
    doc.text("Name", 25, 75);
    doc.setFont("times", "normal");
    doc.text(":  " + schoolName, 45, 75);

    doc.setFontSize(12);
    doc.setFont("times", "bold");
    doc.text("Marks", 25, 80);
    doc.setFont("times", "normal");
    doc.text(":  " + marks, 45, 80);
    //
    doc.setFont("times", "bold");
    doc.setFontSize(14);
    doc.text("University Details", 20, 90);

    doc.setFontSize(12);
    doc.text("Name", 25, 95);
    doc.setFont("times", "normal");
    doc.text(":  " + uniName, 45, 95);

    doc.setFontSize(12);
    doc.setFont("times", "bold");
    doc.text("Degree", 25, 100);
    doc.setFont("times", "normal");
    doc.text(":  " + degree, 45, 100);

    doc.setFontSize(12);
    doc.setFont("times", "bold");
    doc.text("Grad. Year", 25, 105);
    doc.setFont("times", "normal");
    doc.text(":  " + gradYear, 45, 105);
    //
    doc.setFont("times", "bold");
    doc.setFontSize(14);
    doc.text("Additional Details", 20, 115);

    doc.setFontSize(12);
    doc.text("Interests", 25, 120);
    doc.setFont("times", "normal");
    doc.text(":  " + interests, 45, 120);

    doc.setFontSize(12);
    doc.setFont("times", "bold");
    doc.text("Talents", 25, 125);
    doc.setFont("times", "normal");
    doc.text(":  " + talents, 45, 125);

    doc.setFontSize(12);
    doc.setFont("times", "bold");
    doc.text("Skills", 25, 130);
    doc.setFont("times", "normal");
    doc.text(":  " + skills, 45, 130);

    doc.setFontSize(12);
    doc.setFont("times", "bold");
    doc.text("Socials", 25, 135);
    doc.setFont("times", "normal");
    doc.text(":  " + socialLinks, 45, 135);

    //

    doc.addPage();
    doc.setFontSize(18);
    doc.text("My Achievements", 20, 20);

    let y = 20;

    for (let i = 0; i < achs.length; i++) {
      const { achName: an, category: c, subCategory: sc, desc: d } = achs[i];

      doc.setFont("times", "bold");
      doc.setFontSize(14);
      y = y + 10;
      doc.text(an, 25, y);

      doc.setFontSize(12);
      doc.setFont("times", "bold");
      y = y + 5;
      doc.text("Category", 30, y);
      doc.setFont("times", "normal");
      doc.text(":  " + c, 55, y);

      doc.setFontSize(12);
      doc.setFont("times", "bold");
      y = y + 5;
      doc.text("SubCategory", 30, y);
      doc.setFont("times", "normal");
      doc.text(":  " + sc, 55, y);

      doc.setFontSize(12);
      doc.setFont("times", "bold");
      y = y + 5;
      doc.text("Description", 30, y);
      doc.setFont("times", "normal");
      doc.text(":  " + d, 55, y, { maxWidth: 140 });
    }

    doc.save("dry1.pdf");
  };
  return (
    <>
      {/* {console.log("user", ui)}
      {console.log("ach", achs)} */}
      {/*error || errorAch ? () : (loading || loadingAch ? () : ())*/}
      {errorAch && <ErrorMessage variant="danger">{errorAch}</ErrorMessage>}
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {loadingAch && <Loading />}
      <Button variant="success" onClick={generatePDF}>
        Download My Resume
      </Button>
    </>
  );
};

export default Resume;
