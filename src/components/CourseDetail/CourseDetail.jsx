import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
import './CourseDetail.css';
import '../../../node_modules/video-react/dist/video-react.css'; 
import { Player } from 'video-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp,faThumbsDown } from '@fortawesome/free-regular-svg-icons';
const video = require('../../Resources/video1.mp4');
class CourseDetail extends Component {
  render(){
    return(
      <Container>
        <Row className="justify-content-center">
          <Col  style={{marginTop:"3%"}}>
            <Player
              playsInline
              src={video}
              fluid={false}
              height={400}
              width={"auto"}
            />
            <div>
            <Row style={{padding:"5%"}} className="align-items-baseline">
              <Col>
                <div className="info-1">
                <h3>Career in UX Course</h3>
                <div style={{marginLeft:'4%',marginRight:"4%"}}>
                  <FontAwesomeIcon style={{fontSize:"30px"}} icon={faThumbsUp} />
                  <p>103</p>
                </div>
                <div>
                  <FontAwesomeIcon style={{fontSize:"30px"}} icon={faThumbsDown} />
                  <p>3</p>
                </div>
                </div>
                </Col>
                <Col>
                  <span>Duration: </span>
                  <span class="duration">02:02:19</span>
                  <span>Last Updated: </span>
                  <span><strong>7 months ago</strong></span>
                </Col>
            </Row>
            <Row style={{padding:"5%",paddingTop:"0"}}>
              <Col>
              <h4 style={{paddingBottom:"5%"}} className="text-primary">KeyPoints</h4>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
              <Row style={{marginTop:'5%'}}>
                <Col>
                  <p><span style={{fontSize:"25px"}}className="text-primary"><strong>&mdash;</strong></span> Lorem ipsum dolor sit amet, consectetur adipiscing eli</p>
                  <p><span style={{fontSize:"25px"}}className="text-primary"><strong>&mdash;</strong></span> Lorem ipsum dolor sit amet, consectetur adipiscing eli</p>
                  <p><span style={{fontSize:"25px"}}className="text-primary"><strong>&mdash;</strong></span> Lorem ipsum dolor sit amet, consectetur adipiscing eli</p>
                  <p><span style={{fontSize:"25px"}}className="text-primary"><strong>&mdash;</strong></span> Lorem ipsum dolor sit amet, consectetur adipiscing eli</p>
                </Col>
                <Col>
                  <p><span style={{fontSize:"25px"}}className="text-primary"><strong>&mdash;</strong></span> Lorem ipsum dolor sit amet, consectetur adipiscing eli</p>
                  <p><span style={{fontSize:"25px"}}className="text-primary"><strong>&mdash;</strong></span> Lorem ipsum dolor sit amet, consectetur adipiscing eli</p>
                  <p><span style={{fontSize:"25px"}}className="text-primary"><strong>&mdash;</strong></span> Lorem ipsum dolor sit amet, consectetur adipiscing eli</p>
                  <p><span style={{fontSize:"25px"}}className="text-primary"><strong>&mdash;</strong></span> Lorem ipsum dolor sit amet, consectetur adipiscing eli</p>
                </Col>
              </Row>
              </Col>
            </Row>
          </div>
          </Col>
        </Row>
      </Container>
    );
    }
}
export default CourseDetail;