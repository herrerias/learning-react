import React from "react";

class AddFishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish = event => {
    event.preventDefault();
    const fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value), //always saving in cents
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value
    };
    this.props.addFish(fish);
    // refresh the form
    event.currentTarget.reset();
  };

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input
          className="name"
          ref={this.nameRef}
          type="text"
          placeholder="Name"
        />
        <input
          className="price"
          ref={this.priceRef}
          type="text"
          placeholder="Price"
        />
        <select name="status" ref={this.statusRef}>
          <option value="avaliable">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea className="desc" ref={this.descRef} placeholder="Desc" />
        <input
          className="image"
          ref={this.imageRef}
          type="text"
          placeholder="Image"
        />
        <button type="submit">+ Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;
