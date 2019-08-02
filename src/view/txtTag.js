import React, { Component } from 'react'
import {Tag} from "antd"
import 'antd/dist/antd.css';
const tab = {
    top:{
        color:"#f50",
        txt:"置顶"
    },
    good:{
        color:"#108ee9",
        txt:"精华"
    },
    ask:{
        color:"yellow",
        txt:"问答"
    },
    share:{
        color:"#87d068",
        txt:"分享"
    },
    job:{
        color:"green",
        txt:"招聘"
    },
    dev:{
        color:"lightblue",
        txt:"测试"
    }
}

function getTab( data ){
    return (
         data.top ? "top" :
            data.good ? "good" : 
                data.tab
    )
}
export default class txtTag extends Component {
    render() {
        let nowTab =tab[getTab( this.props.data )]    
        return (
           <Tag
                color={nowTab.color}    
            >{ nowTab.txt }</Tag>
        )
    }
}
