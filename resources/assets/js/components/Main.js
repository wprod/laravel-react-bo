import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import queryString from 'querystring';

import Post from './Post.js';
import PostCreation from './PostCreation.js';

const URL = './api/posts';

class Main extends Component {

  constructor() {
    super();

    this.state = {
      posts: [],
      currentPost: null
    }

    this.handleAddPost = this.handleAddPost.bind(this);
  }

  componentDidMount() {
    axios.get(URL).then(response => {
      this.setState({posts: response.data});
    });
  }

  handleClick(post) {
    this.setState({currentPost: post});
  }

  handleAddPost(newPost) {
    let params = queryString.stringify({
      title: newPost.title,
      description: newPost.description,
      content: newPost.content,
      userId: 1, 
      slug: 'bdlabla',
      status: newPost.status,
      likes: newPost.likes
    });

    axios.post(URL, params).then(response => {
      this.setState((prevState) => ({
        posts: prevState.posts.concat(response.data),
        currentPost: response.data
      }))
    }).catch(error => {
      console.log(error);
    });
  }

  renderPosts() {
    return this.state.posts.map(post => {
      return (<li onClick={() => this.handleClick(post)} key={post.id}>
        {post.title}
      </li>);
    })
  }

  render() {
    return (<div>
      <div>
        <PostCreation onAdd={this.handleAddPost}/>
      </div>
      <div>
        <ul>
          {this.renderPosts()}
        </ul>
      </div>
      <div>
        <Post post={this.state.currentPost}/>
      </div>
    </div>);
  }
}

export default Main;

if (document.getElementById('root')) {
  ReactDOM.render(<Main/>, document.getElementById('root'));
}
