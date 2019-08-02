import React from 'react';
import data from './data'
import {Card} from 'antd'
import 'antd/dist/antd.css';

class Book extends React.Component{
    render(){
      console.log(data);
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

export default Book;
