import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Event extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="bloger-grid">
                <div className="blog-img">
                    <img src={this.props.data.image} title="img6"/>
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
                        <li><Link to={`/details/${this.props.data._id}`}><span>Readmore</span></Link></li>
                    </ul>
                </div>
                <div className="clear"></div>
            </div>
        )
    }
}