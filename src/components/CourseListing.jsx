import React, { Component } from 'react';
import {Card, CardHeader, CardBody, Button } from 'reactstrap';

class CourseListing extends Component {
  render(){
    return(
      <>
      <Card className="course-card">
        <CardHeader><h1>Course Listing</h1></CardHeader>
        <CardBody>
          <div>
            <h5 style={{color:"purple"}}>Course Title</h5>
            <span>Key Points </span>
            <Button color="primary" className="float-right">Delete</Button>
          </div>
        </CardBody>
      </Card>
      </>
    );
  }
}

export default CourseListing;