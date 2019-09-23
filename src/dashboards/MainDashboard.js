import React, { Component } from 'react';
import Grades from '../components/Grades';
import DisplayCourses from '../components/DisplayCourses';

class MainDashboard extends Component {
    render() {
        return (
            <div className="Main-dashboard container">
                <div className="row">
                    <Grades />
                    <DisplayCourses />
                </div>
            </div>
        )
    }
}

export default MainDashboard;
