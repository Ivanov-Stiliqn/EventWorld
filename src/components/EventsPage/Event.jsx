import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {deleteEventAction, getEventCreatorAction, participateInEventAction} from "../../actions/eventActions";

class Event extends Component{
    constructor(props){
        super(props);

        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    onDeleteClick(e){
        this.props.deleteEvent(this.props.data._id);
    }

    render(){
        return (
            <div className="bloger-grid">
                <div className='left-side'>
                    <div className="blog-img">
                        <img src={this.props.data.image} title="img6"/>
                    </div>
                    <div className='eventControls'>
                        {this.props.user.isAdmin === 'true' || this.props.user._id === this.props.data.user ?
                            <Link to={`/edit-event/${this.props.data._id}`}>
                                <img className="editEvent" src='http://www.iconhot.com/icon/png/bunch-cool-bluish-icons/512/edit-29.png'/>
                            </Link> : null}
                        {this.props.user.isAdmin === 'true' ?
                            <img className="deleteEvent" src="http://png-5.findicons.com/files/icons/2713/mobile_device_icons/512/x_delete.png"
                            onClick={this.onDeleteClick}/>: null}
                    </div>
                </div>
                <div className="bloger-content">
                    <h5><a href='#'>
                        {this.props.data.isLooking === 'true' ? <span>Looking for {this.props.data.availablePlaces} people for: </span> : null}
                        {this.props.data.name}
                        </a></h5>
                    <p>{this.props.data.description.split(' ').slice(0, 100).join(' ') + '...'}</p>
                    <ul>
                        <li><a href="#">Date of the event </a></li>
                        <li><a href="#">: {this.props.data.date}</a></li>
                        {this.props.user.username !== undefined ?
                            <li><Link to={`/details/${this.props.data._id}`}><span>Readmore</span></Link></li> :
                            <li><Link to='/login'><span>Readmore</span></Link></li>
                        }
                    </ul>
                </div>
                <div className="clear"></div>
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
    return {
        deleteEvent: (id) => dispatch(deleteEventAction(id))
    }
}

export default connect(mapState, mapDispatch)(Event);