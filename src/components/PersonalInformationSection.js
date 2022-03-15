import { Component } from "react";
import { AiOutlineUpload } from "react-icons/ai"

class PersonalInformationSection extends Component {
  constructor (props) {
    super(props)

    this.handleChange = this.handleChange.bind(this);
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
    return (
      <section>
        <label htmlFor="firstName" className="focus-within:bg-red">
          <input className="peer" type="text" id="firstName" onChange={this.handleChange} required></input>
          <span className="peer-valid:invisible">First name</span>
        </label>
        <label htmlFor="lastName">
          <input className="peer" type="text" id="lastName" onChange={this.handleChange} required></input>
          <span className="peer-valid:invisible">Last name</span>
        </label>
        <label htmlFor="title">
          <input className="peer" type="text" id="title" onChange={this.handleChange} required></input>
          <span className="peer-valid:invisible">Title</span>
        </label>
        <label htmlFor="address">
          <input className="peer" type="text" id="address" onChange={this.handleChange} required></input>
          <span className="peer-valid:invisible">Address</span>
        </label>
        <label htmlFor="phoneNumber">
          <input className="peer" type="number" id="phoneNumber" onChange={this.handleChange} required></input>
          <span className="peer-valid:invisible">Phone number</span>
        </label>
        <label htmlFor="email">
          <input className="peer" type="email" id="email" onChange={this.handleChange} required></input>
          <span className="peer-valid:invisible">Email</span>
        </label>
        <label htmlFor="description">
          <textarea className="resize-none peer h-[100%]" id="description" onChange={this.handleChange} required></textarea>
          <span className="peer-valid:invisible top-3.5">Description</span>
        </label>
      </section>
    )
  }
}

export default PersonalInformationSection;