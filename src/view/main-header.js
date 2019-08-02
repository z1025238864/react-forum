import React, { Component } from 'react'
import { Layout,Row,Col,Divider,Menu,Icon } from 'antd';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import "../css/index.css"
//我们将整个设计建议区域按照 24 等分的原则进行划分。
export default class Mainheader extends Component {
    render() {
        return (
            <div>
                <Layout.Header> 
                   
                    <Row className={"wrap"}>
                        <Col md={6}><h1 id="logo">discussion</h1> </Col>
                        <Col md={18}>
                            <Divider type="vercital" className="headerDivider"/>
                            <Menu mode="horizontal" theme="light" className="T-menu" id="menu">
                                <Menu.Item><Link to="/"> <Icon type="home"/> 首页</Link></Menu.Item>
                                <Menu.Item><Link to="/book"> <Icon type="book"/> 教程</Link></Menu.Item>
                                <Menu.Item><Link to="/about"> <Icon type="info-circle-o"/> 关于</Link></Menu.Item>
                            </Menu>
                            头部组件
                        </Col>
                        
                    </Row>
                </Layout.Header>
                
            </div>
        )
    }
}
