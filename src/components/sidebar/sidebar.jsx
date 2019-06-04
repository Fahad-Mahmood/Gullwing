import React, { Component } from 'react';
import './sidebar.css';
import {Row, Col} from 'reactstrap';
import CourseListing from '../CourseListing';
import AddCourse from '../AddCourse';
import Logout from '../Logout';
const logo = require('../../Resources/Logo/logo.gif');
class Sidebar extends Component {
  constructor(props){
    super(props);
    this.state = {
      link1:true,
      link2:false,
      link3:false,
    }
  }
  click1 = () => {
      this.setState({
        link1:true,
        link2:false,
        link3:false,
      });
  }
  click2 = () => {
      this.setState({
        link1:false,
        link2:true,
        link3:false,
      })
  }
  click3 = () => {
    this.setState({
      link1:false,
      link2:false,
      link3:true,
    })
}
  render(){
    return(
      <Row className="course-body">
        <Col md={2} className="align-self-center">
        <img src={logo} style={{width:"100%",margin:"auto"}} alt="logo" />
          <ul className="sidebarList align-self-center">
            {this.state.link1 === true ?
            <li style={{cursor:"pointer"}}><strong>Add Course</strong></li>
            :
            <li style={{cursor:"pointer"}} onClick={this.click1}>Add Course</li>}
            {this.state.link2 === true ?
            <li style={{cursor:"pointer"}}><strong>Course Listing</strong></li>
            :
            <li style={{cursor:"pointer"}} onClick={this.click2}>Course Listing</li>}
            {this.state.link3 === true ?
            <li style={{cursor:"pointer"}}><strong>Logout</strong></li>
            :
            <li style={{cursor:"pointer"}} onClick={this.click3}>Logout</li>}
          </ul>
        </Col>
        <Col md={10} className="Main-Body">
          {this.state.link1 === true && 
          <AddCourse />
          }
          {this.state.link2 === true && 
          <CourseListing />
          }
          {this.state.link3 === true && 
          <Logout />
          }
        </Col>
      </Row>
    );
    }
}

export default Sidebar;

