import React, { Component } from "react";
import axios from "axios";

import "./FullPost.css";

class FullPost extends Component {
  state = { fullPost: null };

  deleteHandler = () => {
    baseService
      .delete(`/posts/${this.state.fullPost.id}`)
      .then(resp => console.log(resp));
  };

  componentDidUpdate() {
    if (this.props.id) {
      if (
        !this.state.fullPost ||
        (this.state.fullPost && this.state.fullPost.id !== this.props.id)
      ) {
        axios.get(`/posts/${this.props.id}`).then(({ data }) => {
          this.setState({ fullPost: data });
        });
      }
    }
  }
  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    if (this.props.id) {
      post = <p style={{ textAlign: "center" }}>Loading...</p>;
    }
    if (this.state.fullPost) {
      post = (
        <div className="FullPost">
          <h1>{this.state.fullPost.title}</h1>
          <p>{this.state.fullPost.body}</p>
          <div className="Edit">
            <button className="Delete" onClick={this.deleteHandler}>
              Delete
            </button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;
