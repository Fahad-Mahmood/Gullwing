import React, { Component } from 'react';
import './sidebar.css';
import {Row, Col} from 'reactstrap';
import CourseListing from '../CourseListing';
import AddCourse from '../AddCourse';
import Logout from '../Logout';
class Sidebar extends Component {
  render(){
    return(
      <Row className="course-body">
        <Col md={2} className="align-self-center">
          <ul className="sidebarList align-self-center">
            <li>Add Course</li>
            <li>Course Listing</li>
            <li>Logout</li>
          </ul>
        </Col>
        <Col md={10} className="Main-Body">
          <Logout />
        </Col>
      </Row>
    );
    }
}

export default Sidebar;

