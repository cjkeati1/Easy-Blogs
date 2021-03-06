import React, {Fragment, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {getPost, updateLikes} from "../../actions/post";
import {connect} from "react-redux";
import Loader from "../loader/Loader";
import Moment from "react-moment";
import CommentItem from "./CommentItem";
import CommentForm from "./CommentForm";
import EditPostModalForm from "./EditPostModalForm";
import {Link} from "react-router-dom";
import {LIKE, UNLIKE} from "../../utils/enums";
import uuid from "uuid/v4";
import {useLocation} from 'react-router-dom'


const toggleModal = () => {
   document.getElementById("modal").classList.toggle('is-active');
};

const Post = ({post: {loading, post}, match, auth, getPost, updateLikes}) => {
   let location = useLocation();

   useEffect(() => {
      getPost(match.params.id);
   }, [getPost, match.params.id]);

   const [selectedComment, setSelectedComment] = useState(null);

   return loading || auth.loading || post === null || post._id !== match.params.id ? <Loader/> :

      <Fragment>
         {auth.user && auth.user._id === post.author &&
         <button
            onClick={() => toggleModal()}
            className="button is-primary is-pulled-right is-inverted is-large">
            Edit
         </button>}
         <EditPostModalForm post={post} postId={match.params.id}/>
         < p className="title is-1 is-spaced has-text-left has-text-left-mobile">{post.title}</p>
         <section>
            <p className="subtitle"><Link to={`/profile/user/${post.author}`}
                                          className={'author-name has-text-black'}><strong>{post.author_name}</strong></Link>
            </p>
            <h2 className="subtitle is-size-5">
               <Moment format={'MMMM DD, YYYY'}>{post.date}</Moment>
            </h2>
         </section>

         <section className={"post-content is-size-4"}>
            {post.content}
         </section>

         {post.tags.map(tag => (
            <Link key={uuid()} to={`/tag/${tag}`}>
               <span key={uuid()} className="tag">{tag}</span>
            </Link>
         ))}
         <br/>
         <br/>
         <div className="field is-grouped is-grouped-multiline">
            <div className="control">
               <div className="tags has-addons">
            <span className="tag is-white" onClick={() => auth.user ? updateLikes(post._id, LIKE) : null}>
            <i className={`far fa-thumbs-up has-text-${
               post.likes.find(like =>
                  auth.user && like.user === auth.user._id) !== undefined ?
                  'primary' : 'grey'} fa-fw control`}/>
            </span>
                  <span className="tag is-white">
            <i className={'control'}>{post.likes.length}</i>
            </span>
                  <span className="tag is-white" onClick={() => auth.user ? updateLikes(post._id, UNLIKE) : null}>
            <i className="far fa-thumbs-down has-text-grey fa-fw control"/>
            </span>
               </div>
            </div>
         </div>
         {auth.isAuthenticated ? <CommentForm postId={post._id}/>
            : <div>
               <p>
                  You must be <Link to={{pathname: '/login', state: {from: location.pathname}}}>logged in</Link> to
                  reply
               </p>
               <br/>
            </div>}
         <p className="title is-5 is-spaced has-text-centered has-text-left-mobile is-marginless">Replies</p>
         <hr className={'style10'}/>
         <div className={'comment-section'}>{post.comments.length > 0 ? post.comments.map(comment => (
            <CommentItem postId={post._id} currentUser={auth.user ? auth.user._id : null} key={comment._id}
                         comment={comment} setComment={setSelectedComment} selectedComment={selectedComment}/>
         )) : <p>There are currently no comments on this post.</p>}</div>

      </Fragment>
};

Post.propTypes = {
   getPost: PropTypes.func.isRequired,
   auth: PropTypes.object.isRequired,
   post: PropTypes.object.isRequired,
   updateLikes: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
   post: state.post,
   auth: state.auth
});

export default connect(mapStateToProps, {getPost, updateLikes})(Post);
