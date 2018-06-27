import React from 'react';

export default function render() {
    return(
        <div id="myCarousel" className="carousel slide" data-ride="carousel">

            <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1" className=""></li>
                <li data-target="#myCarousel" data-slide-to="2" className=""></li>
                <li data-target="#myCarousel" data-slide-to="3" className=""></li>
            </ol>
            <div className="carousel-inner" role="listbox">
                <div className="item active">
                    <div className="container">
                        <div className="carousel-caption">
                            <h3>Find Friends to Party</h3>
                            <p>Have an amazing time</p>
                        </div>
                    </div>
                </div>
                <div className="item item2">
                    <div className="container">
                        <div className="carousel-caption">
                            <h3>Share ideas with others</h3>
                            <p>You deserve the best</p>
                        </div>
                    </div>
                </div>
                <div className="item item3">
                    <div className="container">
                        <div className="carousel-caption">
                            <h3>Sport events all the time</h3>
                            <p>All kind of sport tournaments</p>

                        </div>
                    </div>
                </div>
                <div className="item item4">
                    <div className="container">
                        <div className="carousel-caption">

                            <h3>Travel the world</h3>
                            <p>Find new friends with same passions</p>
                        </div>
                    </div>
                </div>
            </div>
            <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                <span className="fa fa-chevron-left" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                <span className="fa fa-chevron-right" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}