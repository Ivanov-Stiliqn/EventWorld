import React, {Component} from 'react';
import {connect} from "react-redux";
import {participateInEventAction} from "../../actions/eventActions";

class UsersGoing extends Component{
    constructor(props){
        super(props);

        this.participate = this.participate.bind(this);
    }

    participate(e){
        let type = e.target.name;
        this.props.participate(this.props.event, this.props.user._id, type);
    }

    render(){
        const event = this.props.event;
        const usersGoing = event.usersGoing === undefined ? 0 :event.usersGoing.length;
        return(
            <div className="blo-top">
                <div className="tech-btm">
                    <h4>{event.date}</h4>
                    <div>People going: {usersGoing} / {event.availablePlaces}</div>
                    <progress max={event.availablePlaces} value={usersGoing}>
                        <div className="progress-bar">
                            <span style={{width: '100%'}}>Progress:</span>
                        </div>
                    </progress>
                    {event.usersGoing === undefined || event.usersGoing.indexOf(this.props.user._id) === -1 ?
                        <div>
                            <button className='participateBtn' name='participate'
                                    onClick={this.participate}>Participate
                            </button>
                        </div> :
                        <div>
                            <button className='participateBtn' name='cancel' onClick={this.participate}>Cancel
                            </button>
                        </div>
                    }


                    <div className="clearfix"></div>
                </div>
            </div>
        )
    }
}

function mapState(state) {
    return {
        events: state.events,
        user: state.user
    };
}

function mapDispatch(dispatch) {
    return {
        participate: (event, userId, type) => dispatch(participateInEventAction(event, userId, type))
    };
}

export default connect(mapState, mapDispatch)(UsersGoing);