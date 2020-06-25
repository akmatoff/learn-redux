import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions/postActions';

class Postform extends Component {
    state = {
        title: '',
        body: ''
    };

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        };

        this.props.addPost(post);

    }

    render() {
        return(
            <div>
                <h1>Add Post</h1>
                <hr></hr>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title: </label>
                        <input type="text" name="title" value={this.state.title} onChange={this.onChange}></input>
                    </div>
                    <br />
                    <div>
                        <label>Body: </label>
                        <textarea name="body" value={this.state.body} onChange={this.onChange} />
                    </div>
                    <div>
                        <input type="submit" value="Submit"></input>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, { addPost })(Postform);