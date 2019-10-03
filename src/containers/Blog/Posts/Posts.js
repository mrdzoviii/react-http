import React, { Component } from "react";
import baseService from "axios";
import Post from "../../../components/Post/Post";
import "./Posts.css";

class Posts extends Component {
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
      <Post
        title={post.title}
        key={post.id}
        author={post.author}
        clicked={() => this.postSelectedHandler(post.id)}
      />
    ));
    return <section className="Posts">{posts}</section>;
  }
}

export default Posts;
