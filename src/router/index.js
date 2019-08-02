import React from 'react';
import Index from '../view/index/index';
import About from '../view/about/index'
import Book from '../view/book/index';
import Details from '../view/details/index';
import Users from '../view/users/index'
import { Route,Switch,Redirect } from 'react-router-dom';

class RouterIndex extends React.Component{
    render(){
      return (
        <div>
            <Switch>
              <Route exact path="/" 
                  render={()=>(
                      <Redirect to="/index/all"/>
                    )
                  }/>
              <Route path="/index/:id" component={Index}/>
              <Route path="/about" component={About}/>
              <Route path="/book" component={Book}/>
              <Route path="/details" component={Details}/>
              <Route path="/users" component={Users}/>
            </Switch>
        </div>
      )
    }
}

export default RouterIndex;
