import { Component } from "react";
import Button from "./components/Button";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import PersonalInformationSection from "./components/PersonalInformationSection";
import uniqid from "uniqid";

class App extends Component {
  constructor (props) {
    super (props);

    this.state = {
      experiences: [
        {
          position: '',
          company: '',
          city: '',
          from: '',
          to: '',
          id: uniqid(),
        },
      ],
      educations: [
        {
          universityName: '',
          city: '',
          degree: '',
          subject: '',
          from: '',
          to: '',
          id: uniqid()
        },
      ]
    }

    this.handleDeleteExperience = this.handleDeleteExperience.bind(this);
    this.handleDeleteEducation = this.handleDeleteEducation.bind(this);

    this.handleAddExperience = this.handleAddExperience.bind(this);
    this.handleAddEducation = this.handleAddEducation.bind(this);

    this.handleChangeExperience = this.handleChangeExperience.bind(this);
  }

  handleDeleteExperience(selectedExperience) {
    this.setState({
      experiences: this.state.experiences.filter(experience => {
        return experience.id !== selectedExperience.id;
      })
    })
  }
  
  handleDeleteEducation(selectedEducation) {
    this.setState({
      educations: this.state.educations.filter(education => {
        return education.id !== selectedEducation.id;
      })
    })
  }

  handleAddExperience() {
    const newExperience = {
      position: '',
      company: '',
      city: '',
      from: '',
      to: '',
      id: uniqid(),
    }

    this.setState({
      experiences: this.state.experiences.concat(newExperience)
    })
  }

  handleAddEducation() {
    const newEducation = {
      universityName: '',
      city: '',
      degree: '',
      subject: '',
      from: '',
      to: '',
    }

    this.setState({
      educations: this.state.educations.concat(newEducation)
    })
  }

  handleChangeExperience(input, property, index, arr) {
    // making shallow copies of the array and item
    let shallowArr = [...this.state[arr]];
    let shallowItem = {...shallowArr[index]};
    
    // replacing property and storing in the array copy
    shallowItem[property] = input;
    shallowArr[index] = shallowItem;
    
    // setting the copy to the state
    this.setState({[arr]: shallowArr})
  }

  render () {
    return (
      <div className="bg-gray-200 p-8">

        <div className="w-[50%] flex justify-center">
          <form className="bg-white flex flex-col items-center w-[90%] rounded shadow-lg gap-6">

            <section>
              <h2>Personal Information</h2>
              <PersonalInformationSection />
            </section>

            <section className="experience">
              <h2>Experience</h2>
              {this.state.experiences.map((experience) => {
                return <ExperienceSection 
                  array="experiences" 
                  index={this.state.experiences.indexOf(experience)} 
                  handleDelete={this.handleDeleteExperience} 
                  handleChange={this.handleChangeExperience} 
                  experience={experience}
                  id={experience.id}
                />
              })}
              <Button type="Add" handleClick={this.handleAddExperience}/> 
            </section>

            <section className="education">
              <h2>Education</h2>
              {this.state.educations.map((education) => {
                return <EducationSection 
                  array="educations"
                  index={this.state.educations.indexOf(education)}
                  handleDelete={this.handleDeleteEducation}
                  handleChange={this.handleChangeExperience}
                  education={education}
                />
              })}
              <Button type="Add" handleClick={this.handleAddEducation}/>
            </section>
          
            <section>

            </section>

          </form>
        </div>

      </div>
    )
  }
}

export default App;
