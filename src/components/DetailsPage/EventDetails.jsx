import React, {Component} from 'react';
import {searchAddress} from "../../utilities/map";
import CommentList from './CommentList';

export default class EventDetails extends Component{
    componentDidUpdate(prevProps){
        if(this.props.event.location !== prevProps.event.location){
            searchAddress(this.props.event.location);
        }
    }

    render(){
        const event = this.props.event;
        return(
            <div className="col-md-9 technology-left">
                <div className="business">
                    <div className=" blog-grid2">
                        <img src={event.image} className='imageDetails' alt=""/>
                        <div className="blog-text">
                            <h5>{event.name}</h5>
                            <p>{event.description} </p>
                        </div>
                    </div>

                    <h4>Location: {event.location}</h4>
                    <div id="map-canvas" className="map"></div>

                    <CommentList event={event}/>
                </div>
            </div>
        )
    }
}