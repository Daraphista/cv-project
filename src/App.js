import { Component } from "react";
import Button from "./components/Button";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import PersonalInformationSection from "./components/PersonalInformationSection";
import PreviewSection from "./components/PreviewSection";
import uniqid from "uniqid";

class App extends Component {
  constructor (props) {
    super (props);

    this.state = {
      personalInformation: [ // could've used an object, still used array for compatibility with the handleChange function
        {
          firstName: '',
          lastName: '',
          title: '',
          address: '',
          phoneNumber: '',
          email: '',
          description: '',
          id: uniqid(),
        },
      ],
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

    this.handleChange = this.handleChange.bind(this);
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

  handleChange(input, property, index, arr) {
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

    const { personalInformation } = this.state;

    return (
      <div className="bg-gray-200 p-8 flex">

        <div className="w-[50%] flex justify-center">
          <form className="bg-white flex flex-col items-center w-[90%] rounded shadow-lg gap-6">

            <section>
              <h2>Personal Information</h2>
              {this.state.personalInformation.map((personalInfo) => {
                return <PersonalInformationSection 
                  array="personalInformation"
                  index={this.state.personalInformation.indexOf(personalInfo)}
                  handleChange={this.handleChange}
                  personalInfo={personalInfo}
                  id={personalInfo.id}
                />
              })}
            </section>

            <section className="experience">
              <h2>Experience</h2>
              {this.state.experiences.map((experience) => {
                return <ExperienceSection 
                  array="experiences" 
                  index={this.state.experiences.indexOf(experience)} 
                  handleDelete={this.handleDeleteExperience} 
                  handleChange={this.handleChange} 
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
                  handleChange={this.handleChange}
                  education={education}
                />
              })}
              <Button type="Add" handleClick={this.handleAddEducation}/>
            </section>
          
            <section>

            </section>

          </form>
        </div>

        <div className="w-[50%] flex justify-center">
          <div className="bg-white w-[90%] grid grid-cols-[repeat(10,_minmax(0,_1fr))] grid-rows-6 shadow-lg">
            <div className="bg-blue-800 row-[1/2] col-[1/11] flex flex-col justify-center p-6 gap-2">
              <h1 className="text-white bold text-5xl">{`${personalInformation[0].firstName} ${personalInformation[0].lastName}`}</h1>
              <h2 className="text-white">{`${personalInformation[0].title}`}</h2>
            </div>

            <div className="bg-gray-100 row-[2/7] col-[8/11] p-6">
              <h2 className="text-blue-800">Personal Details</h2>
              <p>{`${personalInformation[0].address}`}</p>
              <p>{`${personalInformation[0].phoneNumber}`}</p>
              <p>{`${personalInformation[0].email}`}</p>
            </div>

            <div className="flex flex-col row-[2/7] col-[1/8] gap-3 p-6">
              <section>
                <h2 className="text-blue-800">Description</h2>
                <p className="italic">{`${personalInformation[0].description}`}</p>
              </section>

              <section>
                <h2 className="text-blue-800">Experience</h2>
                {this.state.experiences.map((experience) => {
                  return <PreviewSection isExperience={true} experience={experience} />
                })}
              </section>

              <section>
                <h2 className="text-blue-800">Education</h2>
                {this.state.educations.map((education) => {
                  return <PreviewSection isEducation={true} education={education} />
                })}
              </section>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default App;
