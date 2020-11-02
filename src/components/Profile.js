import React, { Component } from 'react'

class Profile extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            profile: {
                name: 'Luciano Mazzuca',
                phone: '555-555',
                email: 'lucianomazzuca@mail.com',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A reprehenderit quaerat, suscipit voluptatum nesciunt cumque optio aspernatur animi quod quasi?',
             }
        };

        this.handleChange = this.handleChange.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    
    handleChange(e) {
        const inputName = e.target.name;
        const updatedProfile = this.state.profile;
        updatedProfile[inputName] = e.target.value;

        this.setState({
            profile: updatedProfile,
        })
      };

      submitHandler(e) {
        e.preventDefault()
      }

      saveHandler(e) {
        e.preventDefault()
        const profileContainer = e.target.parentNode.parentNode;
        profileContainer.childNodes[1].classList.add('inactive');
        profileContainer.childNodes[0].classList.remove('inactive');
      }

    render() {
        return (
            <div className = 'profile-container'>

                <div className="profile-content">
                    <h2>Profile</h2>
    
                    <div>
                        <p>{this.state.profile.name}</p>
                        <p>{this.state.profile.phone}</p>
                        <p>{this.state.profile.email}</p>
                        <p>{this.state.profile.description}</p>
                    </div>
    
                    <button onClick={this.props.edit} className="edit-btn">Edit</button>
                </div>

                <div className="profile-edit inactive">
                    <form onSubmit={this.saveHandler} action="">
                        <div className="form-group">
                            <label htmlFor="">Name</label>
                            <input onChange= {this.handleChange} type="text" name="name" value={this.state.profile.name} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Phone</label>
                            <input onChange= {this.handleChange} type="text" name="phone" value={this.state.profile.phone} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Email</label>
                            <input onChange= {this.handleChange} type="text" name="email" value={this.state.profile.email} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Descripcion</label>
                            <textarea onChange= {this.handleChange} name="description" id="" cols="30" rows="10" value={this.state.profile.description} ></textarea>
                        </div>

                        <button type="submit">Save</button>
                    </form>
                </div>

            </div>


        )
    }
}

export default Profile;
