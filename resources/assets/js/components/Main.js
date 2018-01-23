import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import querystring  from 'querystring';

import Post from './Post.js';
import PostCreation from './PostCreation.js';

const URL = 'api/posts/';

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
      console.log(response);
      this.setState({posts: response.data});
    });
  }

  handleClick(post) {
    this.setState({currentPost: post});
  }

  handleAddPost(post) {
    axios.post(URL, querystring.stringify({
        title: 'Fred',
        description: 'Flintstone',
        content: 'Test',
        id: '1',
        userId: 1,
        slug: 'blabla',
        status: 0,
        likes: 212,
    })).then(function(response) {
      console.log(querystring.stringify({
          title: 'Fred',
          description: 'Flintstone',
          content: 'Test',
          id: '1',
          userId: 1,
      }));
    }).catch(function(error) {
      console.log(error);
    })

    // .then(data => {
    //   this.setState((prevState) => ({posts: prevState.posts.concat(data), currentPost: data}))
    // });
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
