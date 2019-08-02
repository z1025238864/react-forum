import React from 'react';
import { Row,Col } from 'antd';
import 'antd/dist/antd.css';
import IndexList from './indexList'
import IndexMenu from './indexMenu'
class Index extends React.Component{
    render(){
      let tab = this.props.match.params.id
      return (
        <Row className="wrap">
          <Col md={6}>
              <IndexMenu id="menuIndex"/>
          </Col>
          <Col md={18}>
            <IndexList 
                id="indexList"
                tab={tab}/>
          </Col>
        </Row>
      )
    }
}

export default Index;
