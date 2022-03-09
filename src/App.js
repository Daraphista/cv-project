import { Component } from "react";
import { AiOutlineUpload } from "react-icons/ai"

class App extends Component {
  constructor (props) {
    super (props);
  }

  handleChange(event) {
  }

  render () {
    return (
      <div className="bg-gray-200 p-8">

        <div className="w-[50%] flex justify-center">
          <form className="bg-white flex flex-col items-center w-[90%] rounded shadow-lg gap-6">

            <section>
              <h2>Personal Information</h2>
              <label htmlFor="first-name" className="focus-within:bg-red">
                <input className="peer" type="text" id="first-name"></input>
                <span className="peer-focus:invisible">First name</span>
              </label>
              <label htmlFor="last-name">
                <input className="peer" type="text" id="last-name"></input>
                <span className="peer-focus:invisible">Last name</span>
              </label>
              <label htmlFor="title">
                <input className="peer" type="text" id="title"></input>
                <span className="peer-focus:invisible">Title</span>
              </label>
              <label htmlFor="address">
                <input className="peer" type="text" id="address"></input>
                <span className="peer-focus:invisible">Address</span>
              </label>
              <label htmlFor="phone-number">
                <input className="peer" type="number" id="phone-number"></input>
                <span className="peer-focus:invisible">Phone number</span>
              </label>
              <label htmlFor="email">
                <input className="peer" type="email" id="email"></input>
                <span className="peer-focus:invisible">Email</span>
              </label>
              <label htmlFor="description">
                <textarea className="resize-none peer h-[100%]" id="description"></textarea>
                <span className="peer-focus:invisible top-3.5">Description</span>
              </label>
              <label htmlFor="photo" className="bg-gray-100 rounded cursor-pointer hover:shadow-md transition-shadow active:shadow-none">
                <span className="flex items-center gap-1">Photo<AiOutlineUpload /></span>
                <input className="invisible" type="file" id="photo"></input>
              </label>
            </section>

            <section>
              <h2>Experience</h2>
            </section>
          
          </form>
        </div>

      </div>
    )
  }
}

export default App;
