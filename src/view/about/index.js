import React from 'react';
import data from './data'
import {Card} from 'antd'
import 'antd/dist/antd.css';

class About extends React.Component{
    render(){
      
      return (
        <div className="wrap">
            { data.map( (item,index)=>{
              return ( 
                <Card 
                    key={index}
                    title={ item.title }
                    type="inner"
                    >
                      <div
                        dangerouslySetInnerHTML={{
                          __html:item.content
                        }
                         
                        }></div>

                    </Card>
               )
            } ) }
        </div>
      )
    }
}

export default About;
