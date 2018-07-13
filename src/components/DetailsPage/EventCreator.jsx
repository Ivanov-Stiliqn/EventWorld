import React, {Component} from 'react';

export default class EventCreator extends Component{
    render(){
        const creator = this.props.creator;
        return(
            <div className="blo-top">
                <div className="tech-btm">
                    <img src={creator.profileImage} alt="" className='profileImage'/>
                    <h2>{creator.firstName + ' ' + creator.lastName}</h2>
                </div>
            </div>
        )
    }
}