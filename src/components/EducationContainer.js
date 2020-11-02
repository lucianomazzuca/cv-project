import React, { Component } from "react";

class EducationContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const {institution, title, admission, graduation} = this.props.education
        return (
            <div>
                <p><b>{institution}</b></p>
                <p>{title}</p>
                <p>
                    {admission} To{" "}
                    {graduation}
                </p>
            </div>
        );
    }
}

export default EducationContainer;
