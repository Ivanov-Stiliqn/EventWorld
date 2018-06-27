import React, {Component} from 'react';

export default class Category extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <li className="portfolio-item2">
                <div>
				<span className="image-block block2">
                   <img width='343px' height='400px'
                        src={this.props.data.image}
                        className="img-responsive" alt="Conceit"/>
                    <div className="port-info">
                        <h5>{this.props.data.name}</h5>
                        <p>View all events</p>
                    </div>
				</span>
                </div>
            </li>
        )
    }

}