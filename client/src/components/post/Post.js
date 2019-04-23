import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import PostItem from '../posts/PostItem';
import CommentForm from './CommentForm';
import CommentFeed from './CommentFeed';
import Spinner from '../common/Spinner';
import { getPost } from '../../actions/postActions';

class Post extends Component {
  componentDidMount() {
      this.props.getPost(this.props.match.params.id);
  }
  
  render() {
    const { post, loading } = this.props.post;
    let postContent; // initialise that

    if(post === null || loading || Object.keys(post).length === 0) {
      postContent = <Spinner />
    } else {
      postContent = (
        <div>
          <PostItem post={post} showActions={false}/>
          <CommentForm postId={post._id}/>
          <CommentFeed postId={post._id} comments={post.comments}/>
        </div>
      );
    }

    return (
      <div className="post">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Link to="/feed" className="btn btn-light mb-3" >
                Back to Feed
              </Link>
              {postContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, { getPost })(Post);
/*mapStateToProps gets the state 
As the first argument passed in to connect, mapStateToProps 
is used for selecting the part of the data from the store
 that the connected component needs. It’s frequently referred
  to as just mapState for short.
*/