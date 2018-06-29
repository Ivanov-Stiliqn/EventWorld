import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import {getEventCreatorAction} from "../../actions/eventActions";

class DetailsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            event: {}
        };
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        let event = this.props.events.filter(e => e._id === id)[0];

        this.setState({event: event});
        this.props.getEventCreator(event.user);
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            let id = this.props.match.params.id;
            let event = this.props.events.filter(e => e._id === id)[0];

            this.setState({event: event});
            this.props.getEventCreator(event.user);
            window.scrollTo(0, 0);
        }
    }

    render() {
        console.log(this.state.event);
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

                            <div className="comment-top">
                                <h4>Comment</h4>
                                <div className="media-left">
                                    <a href="#">
                                        <img src="images/t1.jpg" alt=""/>
                                    </a>
                                </div>
                                <div className="media-body">
                                    <h6 className="media-heading">Richard Spark</h6>
                                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                        sollicitudin commodo. Cras purus odio,
                                        vestibulum in vulputate at, tempus viverra turpis.</p>

                                    <div className="media second">
                                        <div className="media-left">
                                            <a href="#">
                                                <img src="images/t3.jpg" alt=""/>
                                            </a>
                                        </div>
                                        <div className="media-body">
                                            <h6 className="media-heading">Joseph Goh</h6>
                                            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                                ante sollicitudin commodo. Cras purus odio,
                                                vestibulum in vulputate at, tempus viverra turpis.</p>

                                            <div className="media">
                                                <div className="media-left">
                                                    <a href="#">
                                                        <img src="images/t2.jpg" alt=""/>
                                                    </a>
                                                </div>
                                                <div className="media-body">
                                                    <h6 className="media-heading">Melinda Dee</h6>
                                                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                                                        scelerisque ante sollicitudin commodo. Cras purus
                                                        odio, vestibulum in vulputate at, tempus viverra turpis.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div className="comment">
                                <h3>Leave a Comment</h3>
                                <div className="comment-bottom">
                                    <form action="#" method="post">
                                        <input type="text" name="Name" placeholder="Name" required=""/>
                                        <input type="email" name="Email" placeholder="Email" required=""/>

                                        <input type="text" name="Subject" placeholder="Subject" required=""/>

                                        <textarea name="Message" placeholder="Message..." required=""></textarea>

                                        <input type="submit" value="Send"/>
                                    </form>
                                </div>
                            </div>
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
                                <div>People going: {this.state.event.usersGoing} / {this.state.event.availablePlaces}</div>
                                <progress max={this.state.event.availablePlaces} value={this.state.event.usersGoing}>
                                    <div className="progress-bar">
                                        <span style={{width: '100%'}}>Progress:</span>
                                    </div>
                                </progress>
                                <div>
                                    <button className='participateBtn'>Participate</button>
                                </div>

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
        getEventCreator: (userId) => dispatch(getEventCreatorAction(userId))
    };
}

export default connect(mapState, mapDispatch)(DetailsPage);