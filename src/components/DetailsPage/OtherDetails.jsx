import React, {Component} from 'react';
import {connect} from "react-redux";
import {getEventCreatorAction} from "../../actions/eventActions";
import {Link} from 'react-router-dom';
import EventCreator from "./EventCreator";
import UsersGoing from "./UsersGoing";

class OtherDetails extends Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate(prevProps) {
        if (this.props.event._id !== prevProps.event._id) {
            this.props.getEventCreator(this.props.event.user);
        }
    }

    render() {
        return (
            <div className="col-md-3 technology-right-1">
                <EventCreator creator={this.props.creator}/>
                <UsersGoing event={this.props.event}/>

                {this.props.events.filter(e => e.category === this.props.event.category).length > 1 ?
                    <div className="blo-top1">
                        <div className="tech-btm">
                            <h4>Other events</h4>
                            {this.props.events.filter(e => e.category === this.props.event.category && e._id !== this.props.event._id).slice(0, 5).map((e, i) => {
                                return (
                                    <div className="blog-grids" key={i}>
                                        <div className="blog-grid-left">
                                            <Link to={`/details/${e._id}`}><img src={e.image} alt=""/></Link>
                                        </div>
                                        <div className="blog-grid-right">

                                            <h5><Link to={`/details/${e._id}`}>{e.name}</Link></h5>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                )
                            })}
                        </div>
                    </div> :
                    null
                }
            </div>
        )
    }
}

function mapState(state) {
    return {
        events: state.events,
        creator: state.creator
    };
}

function mapDispatch(dispatch) {
    return {
        getEventCreator: (userId) => dispatch(getEventCreatorAction(userId))
    };
}

export default connect(mapState, mapDispatch)(OtherDetails);