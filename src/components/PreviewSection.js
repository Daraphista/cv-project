import { Component } from "react";

class PreviewSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    console.log(this.props.experience);

    if(this.props.isExperience) {
      return (
        <section className="grid grid-cols-[minmax(0,_1fr)_minmax(0,_2fr)]">
          <h2 className="col-[1/2]">{`${this.props.experience.from} - ${this.props.experience.to}`}</h2>
          <h2 className="col-[2/3]">{this.props.experience.position}</h2>
          <p className="col-[2/3]">{`${this.props.experience.company}, ${this.props.experience.city}`}</p>
        </section>
      )
    } else if(this.props.isEducation) {
      return (
        <section className="grid grid-cols-[minmax(0,_1fr)_minmax(0,_2fr)]">
          <h2 className="col-[1/2]">{`${this.props.education.from} - ${this.props.education.to}`}</h2>
          <h2 className="col-[2/3]">{`${this.props.education.universityName}, ${this.props.education.city}`}</h2>
          <p className="col-[2/3]">{`Degree: ${this.props.education.degree}`}</p>
          <p className="col-[2/3]">{`Subject: ${this.props.education.subject}`}</p>
        </section>
      )
    }
  }
}

export default PreviewSection;