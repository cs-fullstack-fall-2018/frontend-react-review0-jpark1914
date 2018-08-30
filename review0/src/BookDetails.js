import React, { Component } from 'react';
import OrderBook from "./OrderBook";


class BookDetails extends Component {
    render() {
        var bookArray = this.props.book.map(
            eachItem => {
                return(
                    <div>
                        <p>This book is {eachItem.title} and it's a {eachItem.genre} series.</p>
                    </div>
                )
            }
        )
        return (
            <div className="BookDetails">
                <h1>{bookArray}</h1>
            </div>
        );
    }
}

export default BookDetails;
