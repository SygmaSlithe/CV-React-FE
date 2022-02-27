import React from "react";

export default function (props) {
  return (
    <div className="row mx-2">
      <div className="col-5">
        <h2 className="my-1">
          {props.prod.name}
          <span className="badge bg-secondary mx-2">₹{props.prod.price}</span>
        </h2>
      </div>
      <div className="col-3">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              props.decrementQ(props.index);
            }}
          >
            -
          </button>
          <button type="button" className="btn btn-warning">
            {props.prod.qty}
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              props.incQ(props.index);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="col-2">{props.prod.qty * props.prod.price}</div>
      <div className="col-2">
            <button className="btn btn-outline-danger" onClick={()=>{props.remItem(props.index)}}>Remove</button>
      </div>
    </div>
  );
}
