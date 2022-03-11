import { Component } from "react";
import Button from "./Button";

class EducationSection extends Component {
  constructor (props) {
    super (props);

    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleDelete() {
    this.props.handleDelete(this.props.education)
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
    const { education } = this.props

    return (
      <section>
        <label htmlFor="universityName">
          <input className="peer" type="text" id="universityName" onChange={this.handleChange} value={education.universityName} required></input>
          <span className="peer-valid:invisible">University name</span>
        </label>
        <label htmlFor="city">
          <input className="peer" type="text" id="city" onChange={this.handleChange} value={education.city} required></input>
          <span className="peer-valid:invisible">City</span>
        </label>
        <label htmlFor="degree">
          <input className="peer" type="text" id="degree" onChange={this.handleChange} value={education.degree} required></input>
          <span className="peer-valid:invisible">Degree</span>
        </label>
        <label htmlFor="subject">
          <input className="peer" type="text" id="subject" onChange={this.handleChange} value={education.subject} required></input>
          <span className="peer-valid:invisible">Subject</span>
        </label>
        <label htmlFor="from">
          <input className="peer" type="text" id="from" onChange={this.handleChange} value={education.from} required></input>
          <span className="peer-valid:invisible">From</span>
        </label>
        <label htmlFor="to">
          <input className="peer" type="text" id="to" onChange={this.handleChange} value={education.to} required></input>
          <span className="peer-valid:invisible">To</span>
        </label>
        <Button type="Delete" handleClick={this.handleDelete}/>
      </section>
    )
  }
}

export default EducationSection;