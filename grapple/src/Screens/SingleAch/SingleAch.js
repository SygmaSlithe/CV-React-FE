import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteAch, updateAch } from "../../actions/achActions";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import MainScreen from "../../components/MainScreen";

function SingleAch({ match, history }) {
  const [achName, setAchName] = useState();
  const [category, setCategory] = useState();
  const [subCategory, setSubCategory] = useState();
  const [desc, setDesc] = useState();
  const [selfAttested, setSelfAttested] = useState(true);
  const [date, setDate] = useState("");

  const dispatch = useDispatch();
  const achUpdate = useSelector((state) => state.achUpdate);
  const { loading, error } = achUpdate;
  const achDelete = useSelector((state) => state.achDelete);
  const {
    loading: loadingDelete,
    success: successDeleted,
    error: errorDelete,
  } = achDelete;

  useEffect(() => {
    const fecthing = async () => {
      const { data } = await axios.get(`/api/achs/${match.params.id}`);
      setAchName(data.achName);
      setCategory(data.category);
      setSubCategory(data.subCategory);
      setDesc(data.desc);
      setSelfAttested(data.selfAttested);
      setDate(data.updatedAt);
    };
    fecthing();
  }, [match.params.id, date]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteAch(id));
    }
    resetHandler();
    history.push("/myachs");
  };

  const resetHandler = () => {
    setAchName("");
    setCategory("");
    setSubCategory("");
    setDesc("");
    setSelfAttested(true);
  };

  const updateHandler = (event) => {
    event.preventDefault();

    if (!achName || !category || !subCategory || !selfAttested) return;
    dispatch(
      updateAch(match.params.id, {
        achName,
        category,
        subCategory,
        desc,
        selfAttested,
      })
    );
    // resetHandler();
    history.push("/myachs");
  };

  return (
    <MainScreen title="Edit Achievement">
      <Card>
        <Card.Header>Edit Your Achievement</Card.Header>
        <Card.Body>
          <Form onSubmit={updateHandler}>
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            {loadingDelete && <Loading size={50} />}
            {errorDelete && (
              <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
            )}

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
            {loading && <Loading size={50} />}
            <Button type="submit" variant="success">
              Update Achievement
            </Button>
            <Button
              variant="danger"
              className="mx-2"
              onClick={() => {
                deleteHandler(match.params.id);
              }}
            >
              Delete
            </Button>
          </Form>
        </Card.Body>
        <Card.Footer className="text-muted">
          Updating on {new Date().toLocaleDateString()}
        </Card.Footer>
      </Card>
    </MainScreen>
  );
}

export default SingleAch;
