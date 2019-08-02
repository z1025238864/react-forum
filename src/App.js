import React from 'react';
import RouterIndex from './router/index';
import Mainheader from './view/main-header'
import Mainfooter from './view/main-footer'



/**
 * 1,react-router-dom
 * 2,antd
 * 3,redux
 * 4,react-redux
 * 5,react-thunk
 * 6,axios
 * 
 * 分版块
 * 1头部
 * 2内容
 * 3尾部
 * 路由模块
 *    1详情内容模块 details
 *    2首页模块     index
 *    3教程         book
 *    4关于         about
 *    5用户模块     user
 * **/
class App extends React.Component{



    render(){
      return (
        <div>
            <Mainheader/>
              <main className="main">
                <RouterIndex/>
              </main>
            <Mainfooter/>
        </div>
      )
    }
}

export default App;
