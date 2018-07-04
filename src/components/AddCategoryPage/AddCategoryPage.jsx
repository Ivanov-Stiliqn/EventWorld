import React, {Component} from "react";
import {connect} from "react-redux";
import {setPage} from "../../actions/pageActions";
import {addCategoryAction} from "../../actions/categoryActions";
import toastr from 'toastr';
import Input from '../common/Input';
import {validateCateogry} from "../../api/validator";

class AddCategoryPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            image: ''
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);

        this.props.setPage('Add_Category');
    }

    onChangeHandler(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmitHandler(e) {
        e.preventDefault();
        let check = validateCateogry(this.state.name, this.state.image);
        if(check !== ''){
            toastr.error(check);
            return;
        }


        this.props.addCategory(this.state.name, this.state.image).then(() => {
                if(this.props.redirect !== '') {
                    this.props.history.push(this.props.redirect);
                }
            }
        );

    }

    render() {
        return (
            <div className="banner_bottom">
                <div className="container">
                    <div className="tittle-w3ls_head">
                        <h3 className="tittle-w3ls three">Add Category</h3>
                    </div>
                    <div className="inner_sec_info_wthree_agile">
                        <div className="signin-form">
                            <div className="login-form-rec">
                                <form onSubmit={this.onSubmitHandler}>
                                    <Input type="text" name="name" placeholder="Category" label='Category' value={this.state.name} onChange={this.onChangeHandler}/>
                                    <Input type="url" name="image" placeholder="Image" label='Image' value={this.state.image} onChange={this.onChangeHandler}/>
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
        redirect: state.redirect
    };
}

function mapDispatch(dispatch) {
    return {
        addCategory: (name, image) => dispatch(addCategoryAction(name, image)),
        setPage: (page) => dispatch(setPage(page))
    };
}

export default connect(mapState, mapDispatch)(AddCategoryPage);