import React, {Component} from 'react';

class Test extends Component {
    state = {
        title: '',
        body: ''
    };

    componentDidMount() {
        console.log('component did mount');
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(data => this.setState({
                title: data.title,
                body: data.body
            }))
    }
    // componentWillMount() {
    //     console.log('component wil mount');
    // }
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log('component did update');
    // }
    // componentWillUpdate(prevProps, prevState, snapshot) {
    //     console.log('component will update');
    // }
    // c(prevProps, prevState, snapshot) {
    //     console.log('component did update');
    // }


    render() {
        const { title, body }  = this.state;
        return (
            <div>
                <h1>{title}</h1>
                <h1>{body}</h1>
            </div>
        );
    }
}

export default Test;