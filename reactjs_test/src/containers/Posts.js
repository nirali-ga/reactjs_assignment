import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import { getPostsAction, pageChangeAction } from './../actions/post.action'
import Pagination from '../components/Pagination';

class Posts extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            post: {}
        }
    }

    componentWillMount() {
        this.props.getPostsAction(this.props.page);
        this.intervalId = setInterval(() => {
            this.props.getPostsAction(this.props.page);
        }, 10000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    onPageChange = (p) => {
        this.props.pageChangeAction(p);
    }

    openPostModal = (e, post) => {
        e.persist()
        this.setState({
            isOpen: true,
            post: post
        })
    }

    render() {
        return (
            <div className="container p-140">
                <Table>
                    <thead>
                        <tr>
                            <th>URL</th>
                            <th>Creacted At</th>
                            <th>Author</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.currentPosts.map((post, i) => (
                                <tr onClick={(e, post) => this.openPostModal(e, post)} key={i}>
                                    <td>{post.url}</td>
                                    <td>{post.created_at}</td>
                                    <td>{post.author}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
                <Pagination selectedPage={this.props.selectedPage} onPageChange={(p) => this.onPageChange(p)} totalPages={this.props.totalPages} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    posts: state.posts,
    currentPosts: state.currentPosts,
    page: state.page,
    totalPages: state.totalPages,
    selectedPage:state.selectedPage
})

const mapDispatchToProps = {
    getPostsAction,
    pageChangeAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);