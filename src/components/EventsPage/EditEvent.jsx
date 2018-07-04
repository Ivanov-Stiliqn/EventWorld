import React, {Component} from "react";
import {connect} from "react-redux";
import {setPage} from "../../actions/pageActions";
import toastr from 'toastr';
import Input from '../common/Input';
import {addEventAction, editEventAction} from "../../actions/eventActions";
import {validateEvent, validateLogin} from "../../api/validator";

class EditEvent extends Component {
    constructor(props) {
        super(props);

        let event = this.props.events.filter(e => e._id === this.props.match.params.id)[0];

        this.state = {
            _id: event._id,
            name: event.name,
            image: event.image,
            date: event.date,
            category: event.category,
            availablePlaces: event.availablePlaces,
            location: event.location,
            description: event.description,
            isLooking: event.isLooking === 'true'
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onClick(e){
        this.setState((prevState) => ({isLooking: !prevState.isLooking}));
    }

    onChangeHandler(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmitHandler(e) {
        e.preventDefault();
        let check = validateEvent(this.state.name, this.state.image, this.state.date, this.state.location, this.state.availablePlaces, this.state.description);
        if(check !== ''){
            toastr.error(check);
            return;
        }

        let data = Object.assign({}, this.state);
        data.user = this.props.user._id;
        this.props.editEvent(data).then(() => {
            if(this.props.redirect !== ''){
                this.props.history.push(this.props.redirect);
            }
        })

    }

    render() {
        return (
            <div className="banner_bottom">
                <div className="container">
                    <div className="tittle-w3ls_head">
                        <h3 className="tittle-w3ls three">Edit Event</h3>
                    </div>
                    <div className="inner_sec_info_wthree_agile">
                        <div className="signin-form">
                            <div className="login-form-rec">
                                <form onSubmit={this.onSubmitHandler}>
                                    <label htmlFor='category'>Category</label>
                                    <select onChange={this.onChangeHandler} name='category'>
                                        {this.props.categories.map((c, i) => {
                                            if(c === this.state.category){
                                                return <option value={c.name} key={i} selected>{c.name}</option>
                                            }

                                            return <option value={c.name} key={i}>{c.name}</option>
                                        })}
                                    </select>
                                    <Input type="text" name="name" placeholder="Event" label='Event' value={this.state.name} onChange={this.onChangeHandler}/>
                                    <Input type="url" name="image" placeholder="Image"  label='Image' value={this.state.image} onChange={this.onChangeHandler}/>
                                    <Input type="number" name="availablePlaces" placeholder="Total People" minLength='1' label='Total People' value={this.state.availablePlaces} onChange={this.onChangeHandler}/>
                                    <Input type="date" name="date" placeholder="Date" label='Date of event' value={this.state.date} onChange={this.onChangeHandler}/>
                                    <Input type="text" name="location" placeholder="Location" label='Location of the event' value={this.state.location} onChange={this.onChangeHandler}/>
                                    <label htmlFor='description'>Description: </label>
                                    <textarea name='description' id='description' required minLength='10' maxLength='1000' onChange={this.onChangeHandler}>{this.state.description}</textarea>
                                    <label htmlFor='isLooking'>Are you hosting the event ?</label><br/>
                                    {this.state.isLooking === true ?
                                        <input type="checkbox" name="isLooking" onClick={this.onClick}/> :
                                        <input type="checkbox" name="isLooking" checked onClick={this.onClick}/>
                                    }

                                    <div className="tp">
                                        <input type="submit" value="Edit"/>
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
        categories: state.categories,
        events: state.events,
        user: state.user,
        redirect: state.redirect
    };
}

function mapDispatch(dispatch) {
    return {
        editEvent: (data) => dispatch(editEventAction(data)),
    };
}

export default connect(mapState, mapDispatch)(EditEvent);