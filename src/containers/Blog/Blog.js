import React, { Component } from "react";
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
import { Switch, Route, NavLink ,Redirect} from "react-router-dom";
import "./Blog.css";
import asyncComponent from "../../hoc/asyncComponent";


/*const AsyncNewPost = asyncComponent(()=>{
    return import('./NewPost/NewPost')
});*/


class Blog extends Component {
  constructor(props) {
    super(props);
  }

  state={
    auth: true
  };

  render() {
      console.log('render');
      console.log(this.props);
      /*if(this.props.name)
          return <div>{this.props.name}</div>;
    */
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true"
                  }} >
                  New post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
            {this.state.auth ? <Route path="/new-post" component={NewPost} /> : null }
            <Route path="/" component={Posts} />
            <Redirect from='/404.html' to='/'/>
        </Switch>
      </div>
    );
  }
}

export default Blog;
