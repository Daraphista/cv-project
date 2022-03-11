import { Component } from "react";
import Button from "./Button";

class ExperienceSection extends Component {
  constructor (props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleDelete() {
    this.props.handleDelete(this.props.experience)
  }

  handleChange(e) {
    this.props.handleChange(
      e.target.value, 
      e.target.id, 
      this.props.index, 
      this.props.array
    )
  }

  render () {
    const { experience } = this.props

    return (
    <section>
      <label htmlFor="position">
        <input className="peer" type="text" id="position" onChange={this.handleChange} value={experience.position} required></input>
        <span className="peer-valid:invisible">Position</span>
      </label>
      <label htmlFor="company">
        <input className="peer" type="text" id="company" onChange={this.handleChange} value={experience.company} required></input>
        <span className="peer-valid:invisible">Company</span>
      </label>
      <label htmlFor="city">
        <input className="peer" type="text" id="city" onChange={this.handleChange} value={experience.city} required></input>
        <span className="peer-valid:invisible">City</span>
      </label>
      <label htmlFor="from">
        <input className="peer" type="text" id="from" onChange={this.handleChange} value={experience.from} required></input>
        <span className="peer-valid:invisible">From</span>
      </label>
      <label htmlFor="to">
        <input className="peer" type="text" id="to" onChange={this.handleChange} value={experience.to} required></input>
        <span className="peer-valid:invisible">To</span>
      </label>
      <Button type="Delete" handleClick={this.handleDelete} /> 
    </section>
    )
  }
}

export default ExperienceSection;