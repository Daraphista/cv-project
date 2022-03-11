import { Component } from "react";
import { AiOutlineUpload } from "react-icons/ai"

class PersonalInformationSection extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <section>
        <label htmlFor="first-name" className="focus-within:bg-red">
          <input className="peer" type="text" id="first-name" required></input>
          <span className="peer-valid:invisible">First name</span>
        </label>
        <label htmlFor="last-name">
          <input className="peer" type="text" id="last-name" required></input>
          <span className="peer-valid:invisible">Last name</span>
        </label>
        <label htmlFor="title">
          <input className="peer" type="text" id="title" required></input>
          <span className="peer-valid:invisible">Title</span>
        </label>
        <label htmlFor="address">
          <input className="peer" type="text" id="address" required></input>
          <span className="peer-valid:invisible">Address</span>
        </label>
        <label htmlFor="phone-number">
          <input className="peer" type="number" id="phone-number" required></input>
          <span className="peer-valid:invisible">Phone number</span>
        </label>
        <label htmlFor="email">
          <input className="peer" type="email" id="email" required></input>
          <span className="peer-valid:invisible">Email</span>
        </label>
        <label htmlFor="description">
          <textarea className="resize-none peer h-[100%]" id="description" required></textarea>
          <span className="peer-valid:invisible top-3.5">Description</span>
        </label>
        <label htmlFor="photo" className="bg-gray-100 rounded cursor-pointer hover:shadow-md transition-shadow active:shadow-none">
          <span className="flex items-center gap-1">Photo<AiOutlineUpload /></span>
          <input className="invisible" type="file" id="photo" required></input>
        </label>
      </section>
    )
  }
}

export default PersonalInformationSection;