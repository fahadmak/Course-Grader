import React, { Component } from 'react';
import TextInput from './textInput/TextInput';
import { connect } from 'react-redux';
import { addCourse } from '../actions/courseAction';

class Grades extends Component {
    constructor(props) {
        super(props);
        this.state = {
            course: "",
            mark: "",
            courseList: []
        }
    }

    onChange = event => {
        this.setState({[event.target.name]: event.target.value});
    }

    onSubmit = event => {
        event.preventDefault();
        const { course, mark } = this.state;
        let { courseList } = this.state;
        const { addCourse } = this.props;
        const newCourse = {
            course,
            mark
        }

        if (this.isCoiurseExists(courseList, course)) {
            courseList = this.updateCourse(courseList, course);
        }

        this.setState({ courseList: [...courseList, newCourse] }, () => {
            const { courseList } = this.state;
            addCourse(courseList);
        });
    }

    /**
     * Finds if the course already exists
     * @param Array courseList
     * @param string course
     * 
     * @returns Object
     */
    isCoiurseExists = (courseList, course) => {
        return courseList.find(score => {
            return score.course === course;
        });
    }

    /**
     * Removes course duplicates
     * @param Array courseList
     * @param string course
     * 
     * @returns Array
     */
    updateCourse = (courseList, course) => {
        return courseList.filter(score => {
            return score.course !== course;
        });
    }

    render() {
        const { course, mark } = this.state;
        return (
            <div className="grade-form">
                <h4 className="mb-5">New Course</h4>
                <form onSubmit={this.onSubmit}>
                    <TextInput
                        name="course"
                        placeholder="Course Name"
                        value={course}
                        label="Course Name"
                        onChange={this.onChange}
                        required={true}
                    />
                    <TextInput
                        name="mark"
                        placeholder="Mark"
                        value={mark}
                        label="Mark"
                        onChange={this.onChange}
                        required={true}
                        pattern="\d+"
                    />
                    <input
                        type="submit"
                        className="btn btn-primary btn-lg btn-block mt-2"
                    />
                </form>
            </div>
        )
    }
}

export default connect(null, { addCourse })(Grades);
