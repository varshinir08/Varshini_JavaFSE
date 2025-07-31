import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false
    };
  }

   loadPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        this.setState({ posts: data });
      })
      .catch(error => {
        console.error("Error loading posts:", error);
        this.setState({ hasError: true });
      });
  }; 
  componentDidMount() {
    this.loadPosts();
  } 
  componentDidCatch(error, info) {
    alert("An error occurred while rendering posts.");
    console.error("Error caught by componentDidCatch:", error, info);
  } 
  render() {
    return (
      <div>
        <h2>Blog Posts</h2>
        {this.state.posts.length === 0 && <p>Loading posts...</p>}
        {this.state.posts.map(post => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
