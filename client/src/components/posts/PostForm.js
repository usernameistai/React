import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { addPost } from '../../actions/postActions';

class PostForm extends Component {
  constructor(props) {
      super(props); // always put super in a constructor
      this.state = {
          text: '',
          errors: {}
      };

      this.onChange = this.onChange.bind(this);// to bind this, have to do it in teh constructor
      this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(newProps) { // error checking occurs here
      if (newProps.errors) {
          this.setState({ errors: newProps.errors});
      }
    }

  onSubmit(e) {
      e.preventDefault();

      const { user } = this.props.auth;// destructuring to get the user who makes the post into props and state
                                    // user is part of teh auth state
      const newPost = {
        text: this.state.text, // this comes from the text from the form
        name: user.name,
        avatar: user.avatar
      };

      this.props.addPost(newPost);
      this.setState({ text: '' });
  }

  onChange(e) {
      this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="post-form mb-3">
        <div className="card card-info">
          <div className="card-header bg-info text-white">
            Say Somthing...
          </div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <TextAreaFieldGroup 
                  placeholder="Create Post"
                  name="text"
                  value={this.state.text}
                  onChange={this.onChange}
                  error={errors.text}
                />
              </div>
              <button type="submit" className="btn btn-dark">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

PostForm.propTypes = {
    addPost: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { addPost })(PostForm);