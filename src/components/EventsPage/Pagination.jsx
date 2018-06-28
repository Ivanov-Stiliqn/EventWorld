import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Pagination extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {previous, next, current, pages, last, uri} = this.props.data;
        const url = '/all/';

        if(pages === undefined){
            return null;
        }

        return(
            <div className="wrap">
                <ul className="dc_pagination dc_paginationA dc_paginationA03">
                    <li><Link to={url + '1' + uri} className="first">First</Link></li>
                    <li><Link to={url + previous + uri} className="previous">Previous</Link></li>
                    {pages.map((p,i) => {
                            if(p === Number(current)){
                                return <li><Link to={url + p + uri} className="current" key={i}>{p}</Link></li>
                            }else{
                                return <li><Link to={url + p + uri} key={i}>{p}</Link></li>
                            }
                        }
                        )}
                    <li><Link to={url + next + uri} className="next">Next</Link></li>
                    <li><Link to='#' className="last">Last</Link></li>
                </ul>
                <div className="clear"></div>
            </div>
        )
    }
}