import React, {Component} from 'react';

export default class Comment extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const [firstComment, secondComment, thirdComment] = [...this.props.data];
        return(
            <div>
                <div className="media-left">
                    <a href="#">
                        <img src={firstComment.userImage} alt=""/>
                    </a>
                </div>
                <div className="media-body">
                    <h6 className="media-heading">{firstComment.userFullname}</h6>
                    <p className='firstPar'>{firstComment.content}</p>
                    {secondComment !== undefined &&
                    <div className="media second">
                        <div className="media-left">
                            <a href="#">
                                <img src={secondComment.userImage} alt=""/>
                            </a>
                        </div>
                        <div className="media-body">
                            <h6 className="media-heading">{secondComment.userFullname}</h6>
                            <p className='secondPar'>{secondComment.content}</p>
                            {thirdComment !== undefined &&
                            <div className="media last">
                                <div className="media-left">
                                    <a href="#">
                                        <img src={thirdComment.userImage} alt=""/>
                                    </a>
                                </div>
                                <div className="media-body">
                                    <h6 className="media-heading">{thirdComment.userFullname}</h6>
                                    <p className='thirdPar'>{thirdComment.content}</p>
                                </div>
                            </div>
                            }

                        </div>
                    </div>
                    }

                </div>
            </div>
        )
    }
}