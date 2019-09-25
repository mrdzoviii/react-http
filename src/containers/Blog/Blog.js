import React, { Component } from "react";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import baseService from "axios";
import "./Blog.css";

class Blog extends Component {
  state = {
    posts: [],
    selectedID: null
  };

  componentDidMount() {
    baseService.get("https://jsonplaceholder.typicode.com/posts").then(resp => {
      const posts = resp.data.slice(0, 4);
      const data = posts.map(post => {
        return { ...post, author: "Jovan" };
      });
      this.setState({ posts: data });
    });
  }

  postSelectedHandler = id => {
    this.setState({ selectedID: id });
  };

  deleteHandler = () => {
    baseService
      .delete(
        `https://jsonplaceholder.typicode.com/posts/${this.state.selectedID}`
      )
      .then(resp => console.log(resp));
  };

  render() {
    const posts = this.state.posts.map(post => (
      <Post
        title={post.title}
        key={post.id}
        author={post.author}
        clicked={() => this.postSelectedHandler(post.id)}
      />
    ));
    return (
      <div>
        <section className="Posts">{posts}</section>
        <section>
          <FullPost id={this.state.selectedID} delete={this.deleteHandler} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
