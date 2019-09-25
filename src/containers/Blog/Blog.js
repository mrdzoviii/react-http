import React, { Component } from "react";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import baseService from "axios";
import "./Blog.css";

class Blog extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    baseService
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(({ data: posts }) => this.setState({ posts }));
  }

  render() {
    const posts = this.state.posts.map(post => (
      <Post title={post.title} id={post.id} />
    ));
    return (
      <div>
        <section className="Posts">{posts}</section>
        <section>
          <FullPost />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
