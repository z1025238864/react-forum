import React, { Component } from 'react';
import { Menu, } from 'antd';
import { Link } from 'react-router-dom';

export default class indexMenu extends Component {
    render() {
        return (
            <div>
                <Menu 
                    id={this.props.id}
                >
                    <Menu.Item>  <Link to="/index/all"/>全部  </Menu.Item>
                    <Menu.Item> <Link to="/index/good"/>精华 </Menu.Item>
                    <Menu.Item> <Link to="/index/ask"/>问答 </Menu.Item>
                    <Menu.Item> <Link to="/index/share"/>分享 </Menu.Item>
                    <Menu.Item> <Link to="/index/job"/>招聘 </Menu.Item>
                    <Menu.Item> <Link to="/index/dev"/>测试 </Menu.Item>
            </Menu>
            </div>
        )
    }
}
