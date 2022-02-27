import React from "react";

class AddItem extends React.Component {
  state = {
    prodName: "",
    prodPrice: 0,
  };
  render() {
    return (
      <form
        className="row my-3"
        onSubmit={(e) => {
          e.preventDefault();
          this.props.addItem(this.state.prodName, this.state.prodPrice);
        }}
      >
        <div className="mb-3 col-4">
          <label htmlFor="itemName" className="form-label">
            Item Name
          </label>
          <input
            type="text"
            className="form-control"
            id="itemName"
            aria-describedby="name"
            name="prodName"
            onChange={(e) => {
              this.setState({ prodName: e.currentTarget.value });
            }}
            value={this.state.prodName}
          />
        </div>
        <div className="mb-3 col-4">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="prodPrice"
            onChange={(e) => {
              this.setState({ prodPrice: e.currentTarget.value });
            }}
            value={this.state.prodPrice}
          />
        </div>
        <button type="submit" className="mb-3 btn btn-primary col-4">
          Add
        </button>
      </form>
    );
  }
}

export default AddItem;
