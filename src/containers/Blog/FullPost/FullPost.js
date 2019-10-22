import React, { Component } from "react";
import axios from "axios";

import "./FullPost.css";

class FullPost extends Component {
  state = { fullPost: null };

  constructor(props) {
    super(props);
    console.log("Constructor FULL post");
  }

  deleteHandler = () => {
    axios
      .delete(`/posts/${this.state.fullPost.id}`)
      .then(resp => console.log(resp));
  };

  componentDidUpdate() {
    console.log(this.props);
    if (this.props.match.params.id) {
      if (
        !this.state.fullPost ||
        (this.state.fullPost && this.state.fullPost.id.toString() !== this.props.match.params.id)
      ) {
        axios.get(`/posts/${this.props.match.params.id}`).then(({ data }) => {
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
