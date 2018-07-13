import React, {Component} from 'react';
import {connect} from "react-redux";
import {getEventById} from "../../api/service";
import EventDetails from './EventDetails';
import OtherDetails from './OtherDetails'

class DetailsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            event: {}
        };
    }

    async componentDidMount() {
        let id = this.props.match.params.id;
        let event = await this.fetchData(id);

        this.setState({event: event});
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            let id = this.props.match.params.id;
            let event = this.props.events.filter(e => e._id === id)[0];

            this.setState({event: event});
            window.scrollTo(0, 0);
        }
    }

    async fetchData(eventId){
        let event = {};
        if(this.props.events.length === 0){
            event = await getEventById(eventId);
        }
        else{
            event = this.props.events.filter(e => e._id === eventId)[0];
        }

        return event;
    }

    render() {
        return (
            <div className="banner_bottom">
                <div className="container">
                    <EventDetails event={this.state.event} />
                    <OtherDetails event={this.state.event} />

                    <div className="clearfix"></div>
                </div>
            </div>
        )
    }
}

function mapState(state) {
    return {
        events: state.events
    };
}


export default connect(mapState)(DetailsPage);