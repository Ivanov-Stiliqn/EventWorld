import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {deleteCategoryAction} from "../../actions/categoryActions";
import toastr from 'toastr';

class Category extends Component{
    constructor(props){
        super(props);

        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(e){
        this.props.deleteCategory(this.props.data._id);
    }

    render(){
        return (
            <li className="portfolio-item2">
                <div>
                    <span className="image-block block2">
                        {this.props.user.isAdmin === 'true' ?
                            <img className="delete" src="http://png-5.findicons.com/files/icons/2713/mobile_device_icons/512/x_delete.png" onClick={this.onClickHandler}/> :
                            null
                        }

                       <img width='343px' height='400px'
                            src={this.props.data.image}
                            className="img-responsive" alt="Conceit"/>
                        <div className="port-info">
                            <Link to={`/all/1/${this.props.data.name}`}>
                                <h5>{this.props.data.name}</h5>
                                <p>View all events</p>
                            </Link>
                        </div>
                    </span>
                </div>
            </li>
        )
    }
}

function mapState(state) {
    return {
        user: state.user
    };
}

function mapDispatch(dispatch) {
    return{
        deleteCategory: (id) => dispatch(deleteCategoryAction(id))
    }
}

export default connect(mapState, mapDispatch)(Category);