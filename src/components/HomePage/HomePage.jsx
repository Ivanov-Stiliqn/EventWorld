import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setPage} from "../../actions/pageActions";
import {renderCategoriesAction} from "../../actions/categoryActions";
import Category from './Category'

class HomePage extends Component {
    constructor(props) {
        super(props);

        this.props.setPage('Home');
        this.props.renderCategories();
    }

    render() {
        return (
            <div className="banner_bottom">
                <div className="container">
                    <h3 className="tittle-w3ls">Categories</h3>
                    <div className="inner_sec">
                        {this.props.categories.length < 1 ? <h2>Loading ...</h2> : null}
                        <ul className="portfolio-area">
                            {
                                this.props.categories.map((c, i) => {
                                return <Category data={c} key={i}/>
                            })}

                            <div className="clearfix"></div>
                        </ul>

                    </div>

                </div>
            </div>
        );
    }
}

function mapState(state) {
    return {
        user: state.user,
        categories: state.categories
    };
}

function mapDispatch(dispatch) {
    return {
        setPage: (page) => dispatch(setPage(page)),
        renderCategories: () => dispatch(renderCategoriesAction())
    };
}

export default connect(mapState, mapDispatch)(HomePage);