import React , {Component} from 'react';
import Comment from './Comment';
import {connect} from "react-redux";
import {addCommentAction, fetchCommentsAction} from "../../actions/commentActions";
import toastr from 'toastr';
import {addNotificationAction} from "../../actions/notificationActions";

class CommentList extends Component{
    constructor(props){
        super(props);

        this.state = {
            content: ''
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.props.fetchComments(this.props.event._id);
    }

    componentDidUpdate(prevProps){
        if(this.props.event._id !== prevProps.event._id){
            this.props.fetchComments(this.props.event._id);
        }
    }

    onChangeHandler(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmitHandler(e) {
        e.preventDefault();
        if(this.state.content === ''){
            toastr.error('Comment cannot be empty');
            return;
        }

        let comment = {
            content: this.state.content,
            userFullname: this.props.user.firstName + ' ' + this.props.user.lastName,
            userImage: this.props.user.profileImage,
            eventId: this.props.event._id
        };

        this.setState({content: ''});

        this.props.addComment(comment).then(() => {
            toastr.success('Comment added !');
        });

        let users = this.props.event.usersGoing.filter(u => u !== this.props.user._id);
        users.push(this.props.event.user);
        let notification = {
            event: this.props.event._id,
            user: users,
            content: `${this.props.user.firstName} ${this.props.user.lastName} added comment for event: ${this.props.event.name}`,
            isRead: false
        };

        this.props.addNotification(notification);
    }

    divideCommentsIntoGroups(){
        let commentGroups = [];
        let comments = this.props.comments.slice();

        while (comments.length > 0)
            commentGroups.push(comments.splice(0, 3));

        return commentGroups;
    }

    render(){
        let commentGroups = this.divideCommentsIntoGroups();
        return(
            <div>
                {this.props.comments.length > 0 ?
                    <div className="comment-top">
                        <h4>Comments: </h4>
                        {commentGroups.map((c, i) => {
                            return <Comment data={c} key={i}/>
                        })}
                    </div> : null
                }
                <div className="comment">
                    <h3>Leave a Comment</h3>
                    <div className="comment-bottom">
                        <form onSubmit={this.onSubmitHandler}>
                            <textarea name="content" placeholder="Message..." required="" onChange={this.onChangeHandler} value={this.state.content}></textarea>
                            <input type="submit" value="Send"/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

function mapState(state) {
    return {
        user: state.user,
        comments: state.comments
    };
}

function mapDispatch(dispatch) {
    return {
        fetchComments: (eventId) => dispatch(fetchCommentsAction(eventId)),
        addComment: (comment) => dispatch(addCommentAction(comment)),
        addNotification: (notification) => dispatch(addNotificationAction(notification))
    };
}

export default connect(mapState, mapDispatch)(CommentList);