import { Component } from '/lib/preact.js';

import Post from '/app/components/Post.js';
import EmoteDialog from '/app/components/EmoteDialog.js';


class Home extends Component {
    state = {
        posts: []
    }

    constructor() {
        super();
    }

    componentDidMount() {
        fetch("/api/query-posts.php")
        .then(function (response) { return response.json()})
        .then(posts => this.setState({ posts }));
    }

    render() {
        return html`
        <div>
            <h1>Home</h1>
            <${EmoteDialog} icon="add"/>
            ${this.state.posts.map(post => html`<${Post} postId="${post.postId}"/>`)}
        </div>`;
    }
}

export { Home as default };
