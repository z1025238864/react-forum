import React, { Component } from 'react'
import { List,Avatar } from 'antd'
// import data from "./data"
import {Link } from 'react-router-dom';
import TxtTag from '../txtTag';
import {connect} from 'react-redux'
import axios from 'axios'

 class IndexlList extends Component {
     constructor( arg ){
         super( arg )
         this.state={
             page:1
         }
         this.getData( this.props.tab,this.state.page )
     }
    //  componentWillReceiveProps(nextProps){
    //     if( this.props.tab !== nextProps.tab){
    //         this.state.page = 1
    //         this.getData(nextProps.tab,1 )
    //     }
         
    //  }
     shouldComponentUpdate( nextProps,nextState){
         if( this.state.page !== nextState.page ){
            this.getData(nextProps.tab, nextState.page )
         }
        if( this.props.tab !== nextProps.tab){
            this.state.page = 1
            this.getData(nextProps.tab,1 )
        }
        return true
     }
     getData( tab,page ){
         this.props.dispatch( dispatch=>{
             axios.get(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${page}&limit=20`)
                .then( res=>{
                   
                    dispatch({
                        type:"LIST_UPDATA_SUCC",
                        data:res.data
                    })
                    
                } )
                .catch( err=>{
                    console.log(err);
                    
                } )
         } )
     }
    render() {
    //    console.log(this.props);
       let { loading,data } = this.props
       let pagination = {
                current:this.state.page,
                pageSize:20,
                total:500,
                onChange:( current )=>{
                   this.setState({
                       page:current
                   })
                    
                }
       }
        return (
            <div>
                <List 
                    loading={ loading}
                    dataSource={ data }
                    pagination={ pagination }
                    renderItem={
                        Item=>(
                            <List.Item
                                actions={[
                                    "回复"+ Item.reply_count,
                                    "访问"+ Item.visit_count
                                ]}
                            >
                                <List.Item.Meta
                                className={"pic"}
                                    avatar={
                                        <Avatar src={ Item.author.avatar_url}/>
                                    }
                                    title={
                                        <div>
                                            <TxtTag data={Item}></TxtTag>
                                            <Link to={"/details/"+Item.id }>{ Item.title }</Link>
                                        </div>
                                    }
                                    description={
                                        <p>
                                            <Link to={"users"+Item.author.loginname}>{Item.author.loginname}</Link>
                                            发表于：
                                            {Item.create_at.split("T")[0]}
                                        </p>
                                    }
                                ></List.Item.Meta>
                            </List.Item>
                        )
                    }>

                </List>
            </div>
        )
    }
}
export default connect( state=>state.list )(IndexlList);