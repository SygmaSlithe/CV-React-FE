import React from "react";
import { Button } from "react-bootstrap";

const AddAnother = ({ index, props }) => {
  const AddField = (index) => {
    return (
      <div className="form-group">
        <label htmlFor="contact.phone[0]"> Phone Number </label>
        <Field name="contact.phone[0]" type="text" className="form-control" />
        <ErrorMessage
          name="contact.phone[0]"
          component="div"
          className="text-danger"
        />
      </div>
    );
  };
  return (
    <Button
      type="button"
      onClick={() => {
        AddField(index);
      }}
    >
      Add Another?
    </Button>
  );
};

export default AddAnother;
