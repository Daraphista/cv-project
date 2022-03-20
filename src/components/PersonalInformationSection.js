import React from "react";

const PersonalInformationSection = (props) => {
  const handleChange = (e) => {
    props.handleChange(
      e.target.value,
      e.target.id,
      props.index,
      props.array,
    )
  }

  return (
    <section>
    <label htmlFor="firstName" className="focus-within:bg-red">
      <input className="peer" type="text" id="firstName" onChange={handleChange} required></input>
      <span className="peer-valid:invisible">First name</span>
    </label>
    <label htmlFor="lastName">
      <input className="peer" type="text" id="lastName" onChange={handleChange} required></input>
      <span className="peer-valid:invisible">Last name</span>
    </label>
    <label htmlFor="title">
      <input className="peer" type="text" id="title" onChange={handleChange} required></input>
      <span className="peer-valid:invisible">Title</span>
    </label>
    <label htmlFor="address">
      <input className="peer" type="text" id="address" onChange={handleChange} required></input>
      <span className="peer-valid:invisible">Address</span>
    </label>
    <label htmlFor="phoneNumber">
      <input className="peer" type="number" id="phoneNumber" onChange={handleChange} required></input>
      <span className="peer-valid:invisible">Phone number</span>
    </label>
    <label htmlFor="email">
      <input className="peer" type="email" id="email" onChange={handleChange} required></input>
      <span className="peer-valid:invisible">Email</span>
    </label>
    <label htmlFor="description">
      <textarea className="resize-none peer h-[100%]" id="description" onChange={handleChange} required></textarea>
      <span className="peer-valid:invisible top-3.5">Description</span>
    </label>
  </section>
  )
}

export default PersonalInformationSection;