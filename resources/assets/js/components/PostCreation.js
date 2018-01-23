import React, {Component} from 'react';

class AddPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newPost: {
        title: '',
        description: '',
        content: '',
        likes: 0,
        status: 0
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(key, e) {
    var state = Object.assign({}, this.state.newPost);
    state[key] = e.target.value;
    this.setState({newPost: state});
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.onAdd(this.state.newPost);
  }

  render() {
    const divStyle = {
      //TODO
    }

    return (<div>
      <h2>
        Add new post
      </h2>
      <div style={divStyle}>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title : <input type="text" onChange={(e) => this.handleInput('title', e)}/>
          </label>
          <br />
          <label>
            Description : <input type="text" onChange={(e) => this.handleInput('description', e)}/>
          </label>
          <br />
          <label>
            Content : <input type="text" onChange={(e) => this.handleInput('content', e)}/>
          </label>
          <br />
          <label>
            Likes : <input type="text" onChange={(e) => this.handleInput('likes', e)}/>
          </label>
          <br />
          <input type="submit" value="Submit"/>
        </form>
      </div>
    </div>)
  }
}

export default AddPost;
