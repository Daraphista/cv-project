import React from "react";
import Button from "./Button";

const ExperienceSection = (props) => {
  const handleDelete = () => {
    props.handleDelete(props.experience);
  }
  const handleChange = (e) => {
    props.handleChange(
      e.target.value,
      e.target.id,
      props.index,
      props.array,
    )
  }

  const { experience } = props;

  return (
    <section>
      <label htmlFor="position">
        <input className="peer" type="text" id="position" onChange={handleChange} value={experience.position} required></input>
        <span className="peer-valid:invisible">Position</span>
      </label>
      <label htmlFor="company">
        <input className="peer" type="text" id="company" onChange={handleChange} value={experience.company} required></input>
        <span className="peer-valid:invisible">Company</span>
      </label>
      <label htmlFor="city">
        <input className="peer" type="text" id="city" onChange={handleChange} value={experience.city} required></input>
        <span className="peer-valid:invisible">City</span>
      </label>
      <label htmlFor="from">
        <input className="peer" type="text" id="from" onChange={handleChange} value={experience.from} required></input>
        <span className="peer-valid:invisible">From</span>
      </label>
      <label htmlFor="to">
        <input className="peer" type="text" id="to" onChange={handleChange} value={experience.to} required></input>
        <span className="peer-valid:invisible">To</span>
      </label>
      <Button type="Delete" handleClick={handleDelete} /> 
    </section>
  )
}

export default ExperienceSection;