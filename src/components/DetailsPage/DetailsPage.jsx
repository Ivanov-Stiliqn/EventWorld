import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import {getEventCreatorAction, participateInEventAction} from "../../actions/eventActions";
import {searchAddress} from "../../utilities/map";
import CommentList from './CommentList';
import toastr from 'toastr';

class DetailsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            event: {}
        };

        this.participate = this.participate.bind(this);
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        let event = this.props.events.filter(e => e._id === id)[0];

        this.setState({event: event});
        this.props.getEventCreator(event.user);
        searchAddress(event.location);
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            let id = this.props.match.params.id;
            let event = this.props.events.filter(e => e._id === id)[0];

            this.setState({event: event});
            this.props.getEventCreator(event.user);
            window.scrollTo(0, 0);
            searchAddress(event.location);
        }
    }

    participate(e){
        let type = e.target.name;
        this.props.participate(this.state.event, this.props.user._id, type);
    }

    render() {
        const usersGoing = this.state.event.usersGoing === undefined ? 0 : this.state.event.usersGoing.length;
        return (
            <div className="banner_bottom">
                <div className="container">
                    <div className="col-md-9 technology-left">
                        <div className="business">
                            <div className=" blog-grid2">
                                <img src={this.state.event.image} className='imageDetails' alt=""/>
                                <div className="blog-text">
                                    <h5>{this.state.event.name}</h5>
                                    <p>{this.state.event.description} </p>
                                </div>
                            </div>

                            <h4>Location: {this.state.event.location}</h4>
                            <div id="map-canvas" className="map"></div>

                           <CommentList event={this.state.event._id}/>
                        </div>
                    </div>

                    <div className="col-md-3 technology-right-1">
                        <div className="blo-top">
                            <div className="tech-btm">
                                <img src={this.props.creator.profileImage} alt="" className='profileImage'/>
                                <h2>{this.props.creator.firstName + ' ' + this.props.creator.lastName}</h2>
                            </div>
                        </div>
                        <div className="blo-top">
                            <div className="tech-btm">
                                <h4>{this.state.event.date}</h4>
                                <div>People going: {usersGoing} / {this.state.event.availablePlaces}</div>
                                <progress max={this.state.event.availablePlaces} value={usersGoing}>
                                    <div className="progress-bar">
                                        <span style={{width: '100%'}}>Progress:</span>
                                    </div>
                                </progress>
                                {this.state.event.usersGoing === undefined || this.state.event.usersGoing.indexOf(this.props.user._id) === -1 ?
                                    <div>
                                        <button className='participateBtn' name='participate' onClick={this.participate}>Participate</button>
                                    </div> :
                                    <div>
                                        <button className='participateBtn' name='cancel' onClick={this.participate}>Cancel</button>
                                    </div>
                                }


                                <div className="clearfix"></div>
                            </div>
                        </div>
                        {this.props.events.filter(e => e.category === this.state.event.category).length > 1 ?
                            <div className="blo-top1">
                                <div className="tech-btm">
                                    <h4>Other events</h4>
                                    {this.props.events.filter(e => e.category === this.state.event.category && e._id !== this.state.event._id).slice(0, 5).map(e => {
                                        return (
                                            <div className="blog-grids">
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
                    <div className="clearfix"></div>
                </div>
            </div>
        )
    }
}

function mapState(state) {
    return {
        user: state.user,
        events: state.events,
        creator: state.creator
    };
}

function mapDispatch(dispatch) {
    return {
        getEventCreator: (userId) => dispatch(getEventCreatorAction(userId)),
        participate: (event, userId, type) => dispatch(participateInEventAction(event, userId, type))
    };
}

export default connect(mapState, mapDispatch)(DetailsPage);