import React, { Component } from 'react'
import {List,Avatar} from 'antd'
import {Link } from 'react-router-dom';
export default class ReplyList extends Component {
    render() {
        // console.log(this.props);
        let { replise,replaycount } = this.props
        return (
            <div>
               <List
                    id="list"
                    dataSource={ replise}
                    renderItem={
                        item=>(
                            <List.Item 
                                className="listitem"
                                extra={ item.ups.length > 0 ? (<span className="answer"> 有{item.ups.length}人赞了这条回复 </span>):"" }>
                                <List.Item.Meta
                                    avatar={
                                        <Avatar src={item.author.avatar_url}></Avatar>
                                    }
                                    description={
                                        <div>
                                            <p><Link to={"users"+item.author.loginname}>{item.author.loginname}</Link>
                                            发表于：
                                            {item.create_at.split("T")[0]}
                                            </p>
                                         <div
                                            dangerouslySetInnerHTML={{
                                            __html:item.content
                                            }
                              
                                            }></div>
                                     </div>
                                    }

                                ></List.Item.Meta>
                                
                            </List.Item>
                        )
                    }
               >
                   
                </List> 
            </div>
        )
    }
}
