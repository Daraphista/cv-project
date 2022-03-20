import React from "react";
import Button from "./Button";

const EducationSection = (props) => {
  const handleDelete = () => {
    props.handleDelete(props.education);
  }
  const handleChange = (e) => {
    props.handleChange(
      e.target.value,
      e.target.id,
      props.index,
      props.array,
    )
  }

  const { education } = props;

  return (
    <section>
        <label htmlFor="universityName">
          <input className="peer" type="text" id="universityName" onChange={handleChange} value={education.universityName} required></input>
          <span className="peer-valid:invisible">University name</span>
        </label>
        <label htmlFor="city">
          <input className="peer" type="text" id="city" onChange={handleChange} value={education.city} required></input>
          <span className="peer-valid:invisible">City</span>
        </label>
        <label htmlFor="degree">
          <input className="peer" type="text" id="degree" onChange={handleChange} value={education.degree} required></input>
          <span className="peer-valid:invisible">Degree</span>
        </label>
        <label htmlFor="subject">
          <input className="peer" type="text" id="subject" onChange={handleChange} value={education.subject} required></input>
          <span className="peer-valid:invisible">Subject</span>
        </label>
        <label htmlFor="from">
          <input className="peer" type="text" id="from" onChange={handleChange} value={education.from} required></input>
          <span className="peer-valid:invisible">From</span>
        </label>
        <label htmlFor="to">
          <input className="peer" type="text" id="to" onChange={handleChange} value={education.to} required></input>
          <span className="peer-valid:invisible">To</span>
        </label>
        <Button type="Delete" handleClick={handleDelete}/>
      </section> 
  )
}

export default EducationSection;