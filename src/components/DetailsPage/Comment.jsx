import React, {Component} from 'react';
import {connect} from "react-redux";
import {deleteCommentAction} from "../../actions/commentActions";

class Comment extends Component {
    constructor(props){
        super(props);

        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(id){
        this.props.deleteComment(id);
    }

    render(){
        const [firstComment, secondComment, thirdComment] = [...this.props.data];
        return(
            <div>
                <div className="media-left">
                    <a href="#">
                        <img src={firstComment.userImage} alt=""/>
                    </a>
                </div>
                <div className="media-body">
                    <div className="deleteArea">
                        <h6 className="media-heading">{firstComment.userFullname}</h6>
                        {this.props.user.isAdmin === 'true' ?
                            <img className="deleteComment" src="http://png-5.findicons.com/files/icons/2713/mobile_device_icons/512/x_delete.png"
                             onClick={(e) => this.onClickHandler(firstComment._id)}/>
                            : null}
                    </div>
                    <p className='firstPar'>{firstComment.content}</p>
                    {secondComment !== undefined &&
                    <div className="media second">
                        <div className="media-left">
                            <a href="#">
                                <img src={secondComment.userImage} alt=""/>
                            </a>
                        </div>
                        <div className="media-body">
                            <div className="deleteArea">
                                <h6 className="media-heading">{secondComment.userFullname}</h6>
                                {this.props.user.isAdmin === 'true' ?
                                    <img className="deleteComment" src="http://png-5.findicons.com/files/icons/2713/mobile_device_icons/512/x_delete.png"
                                         onClick={(e) => this.onClickHandler(secondComment._id)}/>
                                    : null}
                            </div>
                            <p className='secondPar'>{secondComment.content}</p>
                            {thirdComment !== undefined &&
                            <div className="media last">
                                <div className="media-left">
                                    <a href="#">
                                        <img src={thirdComment.userImage} alt=""/>
                                    </a>
                                </div>
                                <div className="media-body">
                                    <div className="deleteArea">
                                        <h6 className="media-heading">{thirdComment.userFullname}</h6>
                                        {this.props.user.isAdmin === 'true' ?
                                            <img className="deleteComment" src="http://png-5.findicons.com/files/icons/2713/mobile_device_icons/512/x_delete.png"
                                                 onClick={(e) => this.onClickHandler(thirdComment._id)}/>
                                            : null}
                                    </div>
                                    <p className='thirdPar'>{thirdComment.content}</p>
                                </div>
                            </div>
                            }

                        </div>
                    </div>
                    }

                </div>
            </div>
        )
    }
}

function mapState(state) {
    return {
        user: state.user
    };
}

function mapDispatch(dispatch) {
    return{
        deleteComment: (id) => dispatch(deleteCommentAction(id))
    }
}

export default connect(mapState, mapDispatch)(Comment);