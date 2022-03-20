import React from "react";

const PreviewSection = (props) => {
  if(props.isExperience) {
    return (
      <section className="grid grid-cols-[minmax(0,_1fr)_minmax(0,_2fr)]">
        <h2 className="col-[1/2]">{`${props.experience.from} - ${props.experience.to}`}</h2>
        <h2 className="col-[2/3]">{props.experience.position}</h2>
        <p className="col-[2/3]">{`${props.experience.company}, ${props.experience.city}`}</p>
      </section>
    )
  } else if(props.isEducation) {
    return (
      <section className="grid grid-cols-[minmax(0,_1fr)_minmax(0,_2fr)]">
        <h2 className="col-[1/2]">{`${props.education.from} - ${props.education.to}`}</h2>
        <h2 className="col-[2/3]">{`${props.education.universityName}, ${props.education.city}`}</h2>
        <p className="col-[2/3]">{`Degree: ${props.education.degree}`}</p>
        <p className="col-[2/3]">{`Subject: ${props.education.subject}`}</p>
      </section>
    )
  }
}

export default PreviewSection;