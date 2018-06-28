import React, {Component} from 'react';

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
                    <h5><a href='#'>{this.props.data.name}</a></h5>
                    <p>{this.props.data.description.split(' ').slice(0, 100).join(' ') + '...'}</p>
                    <ul>
                        <li><a href="#">Date of the event </a></li>
                        <li><a href="#">: {this.props.data.date}</a></li>
                        <li><a href="single.html"><span>Readmore</span></a></li>
                    </ul>
                </div>
                <className class="clear"></className>
            </div>
        )
    }
}