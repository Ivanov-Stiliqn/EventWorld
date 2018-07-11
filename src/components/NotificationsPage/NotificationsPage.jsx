import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import {removeNotificationAction} from "../../actions/notificationActions";
import {setPage} from "../../actions/pageActions";

class NotificationsPage extends Component {
    constructor(props){
        super(props);

        this.props.setPage('NOTIFICATIONS_PAGE');
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(index){
        let notification = this.props.notifications[index];
        this.props.removeNotification(notification, this.props.user._id);
    }

    render() {
        return (
            <div className="banner_bottom">
                <h3 className="tittle-w3ls">Notifications:</h3> :
                <div className="container">
                    <div className="bloder-content">
                        {this.props.notifications.map((n,i) => {
                            return(
                                <div onClick={() => this.onClickHandler(i)} key={i}>
                                    <img className='notifImage' src='http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Apps-preferences-desktop-notification-icon.png'/>
                                    <Link name={i} to={`/details/${n.event}`}>{n.content}</Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

function mapState(state){
    return{
        notifications: state.notifications,
        user: state.user
    }
}

function mapDispatch(dispatch){
    return{
        removeNotification: (notification, userId) => dispatch(removeNotificationAction(notification, userId)),
        setPage: (page) => dispatch(setPage(page))
    }
}

export default connect(mapState, mapDispatch)(NotificationsPage);