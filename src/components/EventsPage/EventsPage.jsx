import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    renderEventsAction, getEventsByCategoryAction, getEventsFromSubscriptionsAction,
    subscribeAction
} from "../../actions/eventActions";
import Event from "./Event";
import {setPage} from "../../actions/pageActions";
import Pagination from "./Pagination";
import toastr from "toastr";

class EventsPage extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            category: '',
            pagination: {},
            events: []
        };

        this.props.setPage('Events_Page');

        this.subscribe = this.subscribe.bind(this);
    }

    componentDidMount(){
        let category = this.props.match.params.category;
        category = category === undefined ? '' : category;
        let page = this.props.match.params.page;
        this.fetchData(category).then(() => {
            let start = (page - 1) * 3;
            let events = this.props.events.slice(start, start + 3);
            let pagination = this.renderPagination(Number(page), this.props.events.length, category);
            this.setState({pagination: pagination, category: category, events: events});
        });
    }

    componentDidUpdate(prevProps, prevState){
        let category = this.props.match.params.category;
        category = category === undefined ? '' : category;
        let page = this.props.match.params.page;

        if(page !== prevProps.match.params.page || category !== prevState.category){
            window.scrollTo(0, 0);
            if(category !== prevState.category){
                this.fetchData(category).then(() => {
                    let start = (page - 1) * 3;
                    let events = this.props.events.slice(start, start + 3);
                    let pagination = this.renderPagination(Number(page), this.props.events.length, category);
                    this.setState({pagination: pagination, category: category, events: events});
                })
            }
            else{
                let start = (page - 1) * 3;
                let events = this.props.events.slice(start, start + 3);
                let pagination = this.renderPagination(Number(page), this.props.events.length, category);
                this.setState({pagination: pagination, category: category, events: events});
            }
        }
    }

    async fetchData(category){
        if(category !== ''){
            await this.props.getEventsByCategory(category);
        }
        else if(this.props.user.username && this.props.user.subscriptions !== undefined){
            await this.props.getEventsFromSubscriptions(this.props.user.subscriptions);
        }
        else{
            await this.props.renderEvents()
        }
    }

    subscribe(e){
        let type = e.target.name;
        let user = this.props.user;
        let category = this.state.category;

        this.props.subscribe(type, category, user).then(() => {
            if(type === 'subscribe'){
                toastr.success(`Subscribed to category: ${category}`);
            }
            else{
                toastr.success(`Unsubscribed from category: ${category}`);
            }

            this.props.history.push('/all/1');
        });
    }

    renderPagination(page, dataCount, category){
        let pages = [];
        let uri = '';

        if (category !== '') {
            uri = '/' + category;
        }
            let pagesCount = Math.ceil(dataCount / 3);
            if (pagesCount <= 5) {
                for (let i = 1; i <= pagesCount; i++) {
                    pages.push(i);
                }
            }
            else {
                let end = page + 5 > pagesCount ? pagesCount : page + 5;
                for (let i = page; i <= end; i++) {
                    pages.push(i);
                }
            }

            let next = page >= pagesCount ? pagesCount : page + 1;
            let previous = page - 1 <= 0 ? page : page - 1;
            let pagination = {
                next: next,
                previous: previous,
                pages: pages,
                current: page,
                uri: uri
            };

            return pagination;
    }

    render()
    {
        return (
            <div className="wrap banner_bottom">
                {this.state.category === '' ?
                    <h3 className="tittle-w3ls">All Events</h3> :
                    <div className="subscribeArea">
                        <h3 className="tittle-w3ls">Events from category {this.state.category}</h3>
                        {this.props.user.username !== undefined ?
                            this.props.user.subscriptions !== undefined && this.props.user.subscriptions.indexOf(this.state.category) !== -1 ?
                                <button className="subscribeBtn" name='unsubscribe' onClick={this.subscribe}>Unsubscribe</button> :
                                <button className="subscribeBtn" name='subscribe' onClick={this.subscribe}>Subscribe</button> :
                            null
                        }
                    </div>}
                <div className="about container">
                    <div className="bloder-content">
                        {this.state.events.map((e,i) => {
                            return <Event data={e} key={i}/>
                        })}
                    </div>
                </div>
               <Pagination data={this.state.pagination}/>
            </div>
        );
    }
}

function mapState(state) {
    return {
        user: state.user,
        events: state.events
    };
}

function mapDispatch(dispatch) {
    return{
        renderEvents: () => dispatch(renderEventsAction()),
        getEventsByCategory: (category) => dispatch(getEventsByCategoryAction(category)),
        getEventsFromSubscriptions: (subs) => dispatch(getEventsFromSubscriptionsAction(subs)),
        subscribe: (type, category, user) => dispatch(subscribeAction(type, category, user)),
        setPage: (page) => dispatch(setPage(page))
    };
}

export default connect(mapState, mapDispatch)(EventsPage);