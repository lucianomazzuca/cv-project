import React, { Component } from 'react'
import Education from './components/Education'
import Profile from './components/Profile'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       education: {
         institution: 'UBA',
         title: 'Computer Science',
         admission: '20-5-2015',
         graduation: '20-5-2020',
       }
    }

    this.editHandler = this.editHandler.bind(this);
    this.saveHandler = this.saveHandler.bind(this);

  }
  
  editHandler(e) {
    const profileContainer = e.target.parentNode.parentNode;
    profileContainer.childNodes[0].classList.add('inactive');
    profileContainer.childNodes[1].classList.remove('inactive');
  }


  saveHandler(e) {
    e.preventDefault()
    const profileContainer = e.target.parentNode.parentNode;
    profileContainer.childNodes[1].classList.add('inactive');
    profileContainer.childNodes[0].classList.remove('inactive');
  }

  render() {
    return (
      <div>
        <Profile  edit = {this.editHandler} save = {this.saveHandler} inputHandler ={this.inputHandler}/>
        <Education edit = {this.editHandler} save = {this.saveHandler} education = {this.state.education} />
      </div>
    )
  }
}

export default App;