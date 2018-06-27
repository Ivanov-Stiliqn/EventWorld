import React, {Component} from "react";
import {connect} from "react-redux";
import {setPage} from "../../actions/pageActions";
import {addCategoryAction} from "../../actions/categoryActions";
import toastr from 'toastr';
import Input from '../common/Input';

class AddEventPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            image: '',
            date: '',
            category: '',
            availablePlaces: '',
            isLooking: true
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onClick = this.onClick.bind(this);

        this.props.setPage('Add_Event');
    }

    onClick(e){
        this.setState((prevState) => ({isLooking: !prevState.isLooking}));
    }

    onChangeHandler(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmitHandler(e) {
        e.preventDefault();
        console.log(this.state);

    }

    render() {
        return (
            <div className="banner_bottom">
                <div className="container">
                    <div className="tittle-w3ls_head">
                        <h3 className="tittle-w3ls three">Add Event</h3>
                    </div>
                    <div className="inner_sec_info_wthree_agile">
                        <div className="signin-form">
                            <div className="login-form-rec">
                                <form onSubmit={this.onSubmitHandler}>
                                    <label htmlFor='category'>Category</label>
                                    <select onChange={this.onChangeHandler} name='category'>
                                        {this.props.categories.map((c, i) => {
                                            return <option value={c._id} key={i}>{c.name}</option>
                                        })}
                                    </select>
                                    <Input type="text" name="name" placeholder="Event" required="" label='Event' value={this.state.name} onChange={this.onChangeHandler}/>
                                    <Input type="text" name="image" placeholder="Image" required="" label='Image' value={this.state.image} onChange={this.onChangeHandler}/>
                                    <Input type="number" name="availablePlaces" placeholder="Total People" required="" label='Total People' value={this.state.availablePlaces} onChange={this.onChangeHandler}/>
                                    <Input type="date" name="date" placeholder="Date" required="" label='Date of event' value={this.state.date} onChange={this.onChangeHandler}/>
                                    <label htmlFor='isLooking'>Are you hosting the event ?</label><br/>
                                    <input type="checkbox" name="isLooking" onClick={this.onClick}/>
                                    <div className="tp">
                                        <input type="submit" value="Create"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapState(state) {
    return {
        categories: state.categories
    };
}

function mapDispatch(dispatch) {
    return {
        addCategory: (name, image) => dispatch(addCategoryAction(name, image)),
        setPage: (page) => dispatch(setPage(page))
    };
}

export default connect(mapState, mapDispatch)(AddEventPage);