import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import { Button, Card, Form } from "react-bootstrap";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import { createAch } from "../../actions/achActions";

function CreateAch({ history }) {
  const [achName, setAchName] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [desc, setDesc] = useState("");
  const [selfAttested, setSelfAttested] = useState(true);

  const dispatch = useDispatch();
  const achCreate = useSelector((state) => state.achCreate);
  const { loading, error, success } = achCreate;

  const submitHandler = async (event) => {
    event.preventDefault();
    // console.log(achName, category, subCategory, desc, selfAttested);
    if (!achName || !category || !subCategory || !selfAttested) return;
    dispatch(createAch({ achName, category, subCategory, desc, selfAttested }));
    resetHandler();
    history.push("/myachs");
  };
  const resetHandler = () => {
    setAchName("");
    setCategory("");
    setSubCategory("");
    setDesc("");
    setSelfAttested(false);
  };
  return (
    <MainScreen title="Add an Achievement">
      <Card>
        <Card.Header>Add a new Achievement</Card.Header>
        <Card.Body>
          <Form onSubmit={submitHandler}>
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            {loading ? (
              <Loading />
            ) : (
              <>
                <Form.Group controlId="achName">
                  <Form.Label>Achievement Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={achName}
                    placeholder="Enter the name of your achievement."
                    onChange={(e) => setAchName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicSelect">
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    as="select"
                    value={category}
                    onChange={(e) => {
                      // console.log("e.target.value", e.target.value);
                      setCategory(e.target.value);
                    }}
                  >
                    <option value="">Select Category</option>
                    <option value="Technical">Technical</option>
                    <option value="Non Technical">Non Technical</option>
                  </Form.Control>
                </Form.Group>

                {category == "Technical" ? (
                  <Form.Group controlId="subCategory">
                    <Form.Label>SubCategory</Form.Label>
                    <Form.Control
                      as="select"
                      value={subCategory}
                      onChange={(e) => setSubCategory(e.target.value)}
                    >
                      <option>Select a SubCategory</option>
                      <option value="Event Participation">
                        Event Participation
                      </option>
                      <option value="NPTEL">NPTEL</option>
                      <option value="Hackathon">Hackathon</option>
                      <option value="Workshop/Seminar">Workshop/Seminar</option>
                      <option value="Other">Other</option>
                    </Form.Control>
                  </Form.Group>
                ) : (
                  <Form.Group controlId="subCategory">
                    <Form.Label>SubCategory</Form.Label>
                    <Form.Control
                      as="select"
                      value={subCategory}
                      onChange={(e) => setSubCategory(e.target.value)}
                    >
                      <option>Select a SubCategory</option>
                      <option value="Sports">Sports</option>
                      <option value="Art/Dance/Music">Art/Dance/Music</option>
                      <option value="Language">Language</option>
                      <option value="Other">Other</option>
                    </Form.Control>
                  </Form.Group>
                )}

                <Form.Group controlId="desc">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    value={desc}
                    placeholder="Enter the description"
                    onChange={(e) => setDesc(e.target.value)}
                  />
                </Form.Group>
                <div className="mb-3">
                  <Form.Check
                    type="checkbox"
                    id="selfA"
                    label="The information I enter is true and genuine to my knowledge."
                  />
                </div>
              </>
            )}
            {/* {loading && <Loading size={50}/>} */}
            <Button type="submit" variant="success">
              Add Achievement
            </Button>
            <Button className="mx-2" variant="dark" onClick={resetHandler}>
              Reset
            </Button>
          </Form>
        </Card.Body>
        <Card.Footer className="text-muted">
          Adding on {new Date().toLocaleDateString()}
        </Card.Footer>
      </Card>
    </MainScreen>
  );
}

export default withRouter(CreateAch);
