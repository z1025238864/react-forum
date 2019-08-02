import React from 'react';
import data from './data'
import TxtDetails from './txtDetils'
import ReplyList from './replyList'
import 'antd/dist/antd.css';

class Detail extends React.Component{
    render(){
      console.log(data);
      
      return (
        <div className="wrap">
           <TxtDetails></TxtDetails>
           <ReplyList
              replise = {data.data.replies}
              replaycount= {data.data.reply_count}
           ></ReplyList>
        </div>
      )
    }
}

export default Detail;
