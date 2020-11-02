import React, { Component } from "react";
import EducationContainer from "./EducationContainer";

class Education extends Component {
    constructor(props) {
        super(props);

        this.state = {
            education: [
                {
                    institution: "UBA",
                    title: "Computer Science",
                    admission: "20-5-2015",
                    graduation: "20-5-2020",
                },
                {
                    institution: "UBA",
                    title: "Computer Science",
                    admission: "20-5-2015",
                    graduation: "20-5-2020",
                },
            ],
        };

        this.handleChange = this.handleChange.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.addHandler = this.addHandler.bind(this);
    }

    handleChange(e) {
        const inputName = e.target.name;
        const updatedEducation = this.state.education;
        updatedEducation[inputName] = e.target.value;

        this.setState({
            profile: updatedEducation,
        });
    }

    submitHandler(e) {
        e.preventDefault();
    }

    saveHandler(e) {
        e.preventDefault();
        const profileContainer = e.target.parentNode.parentNode;
        profileContainer.childNodes[1].classList.add("inactive");
        profileContainer.childNodes[0].classList.remove("inactive");
    }

    addHandler(e) {
        console.log(this.state.length)
    }

    render() {
        const educationMap = this.state.education.map(function(element, i) {
            return <EducationContainer education = {element} />
        })

        return (
            <div className="education-container">
                <div className="profile-content">
                    <h2>Education</h2>

                    {educationMap}

                    <button onClick={this.props.edit} className="edit-btn">
                        Edit
                    </button>
                </div>

                <div className="profile-edit inactive">
                    <form onSubmit={this.saveHandler} action="">
                        <div className="form-group">
                            <label htmlFor="">Insitution</label>
                            <input
                                onChange={this.handleChange}
                                type="text"
                                name="institution"
                                value={this.state.education.institution}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">title</label>
                            <input
                                onChange={this.handleChange}
                                type="text"
                                name="title"
                                value={this.state.education.title}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Admission</label>
                            <input
                                onChange={this.handleChange}
                                type="text"
                                name="admission"
                                value={this.state.education.admission}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Graduation</label>
                            <input
                                onChange={this.handleChange}
                                type="text"
                                name="graduation"
                                value={this.state.education.graduation}
                            />
                        </div>

                        <button type="submit">Save</button>
                        <button onClick={this.addHandler}>Add</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Education;
