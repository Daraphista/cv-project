import { Component } from "react";

class AddButton extends Component {
  constructor (props) {
    super (props)
  }

  render () {
    const { type } = this.props;

    return (
      <button className="btn primary" type="button">{type}</button>
    )
  }
}

export default AddButton;