import React, { Component } from "react";
import baseService from "axios";
import Post from "../../../components/Post/Post";
import "./Posts.css";
import { Link, Route } from "react-router-dom";
import FullPost from "../FullPost/FullPost";
class Posts extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    posts: []
  };

  postSelectedHandler = id => {
    this.setState({ selectedID: id });
  };

  componentDidMount() {
    baseService.get("/posts").then(resp => {
      const posts = resp.data.slice(0, 4);
      const data = posts.map(post => {
        return { ...post, author: "Jovan" };
      });
      this.setState({ posts: data });
    });
  }

  render() {
    const posts = this.state.posts.map(post => (
      <Link key={post.id} to={`/${this.props.match.url}/${post.id}`}>
        <Post
          title={post.title}
          key={post.id}
          author={post.author}
          //clicked={() => this.postSelectedHandler(post.id)}
        />
      </Link>
    ));
    return (
      <div>
        <section className="Posts">{posts}</section>
        <Route path="/:id" exact component={FullPost} />
      </div>
    );
  }
}

export default Posts;
