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
      const { data } = await axios.get(`api/achs/${match.params.id}`);
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
                  console.log("e.target.value", e.target.value);
                  setCategory(e.target.value);
                }}
              >
                <option value="">Select Category</option>
                <option value="Cat1">Cat1</option>
                <option value="paws">Paws</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="subCategory">
              <Form.Label>SubCategory</Form.Label>

              <Form.Control
                as="select"
                value={subCategory}
                onChange={(e) => setSubCategory(e.target.value)}
              >
                <option>Select a SubCategory</option>
                <option value="Auto Feeder">Auto Feeder</option>
                <option value="Yarn Ball">"Yarn Ball"</option>
              </Form.Control>
            </Form.Group>

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
                label="I have attested my file."
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
          Updated on {new Date().toLocaleDateString()}
        </Card.Footer>
      </Card>
    </MainScreen>
  );
}

export default SingleAch;
