import React, { Component } from 'react';

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(data => this.setState({ posts: data }))
    }

    render() {
        const posts = this.state.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));
        return(
            <div>
                <h1>Posts</h1>
                <hr></hr>
                <div>{ posts }</div>
            </div>
        );
    }
}

export default Posts;