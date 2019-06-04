import React, { Component } from 'react';
import {Form, FormGroup, Input, Button } from 'reactstrap';

class AddCourse extends Component {
  render(){
    return(
      <>
      <Form className="course-form">
				<FormGroup>
					<Input placeholder="AddCourse" />
				</FormGroup>
				<FormGroup>
					<Input placeholder="Video Embed Url" />
				</FormGroup>
				<FormGroup>
					<Input type="textarea" placeholder="Key Points" />
				</FormGroup>
				<Button style={{width:"20%",margin:"auto"}} color="primary">Add Course</Button>
      </Form>
      </>
    );
  }
}

export default AddCourse;