import React, { Component } from 'react';
import BookDetails from "./BookDetails";


class OrderBook extends Component {
    constructor(props) {
        super(props);
        this.state= {
            books: [{title: 'Goosebumps ', genre: 'Horror '}, {title: 'The Imperfection of Spirituality', genre: 'Religion '}],
            title: ' ',
            genre: ' ',
        }
    }
    submitFunction = (event) => {
        let newColletction = {title: this.state.title, genre: this.state.genre};
        this.state.books.push(newColletction);
        this.setState({books: this.state.books});
        event.preventDefault()
    }
    titleChange=(event) =>{
        this.setState({title: event.target.value})
    }
    genreChange = (event) =>{
        this.setState({genre:event.target.value})
    }

    render() {
        return (
            <div>
                <h1>Books:</h1>

                <form onSubmit={this.submitFunction}>
                    <label htmlFor='bookTitle'>Book Name: </label>
                        <input type='text' id='bookTitle' value={this.state.title} onChange={this.titleChange}/>
                    <br/><br/>

                    <label htmlFor='bookGenre'> Book Genre: </label>
                    <input type='text' id='bookGenre' value={this.state.genre} onChange={this.genreChange}/>

                    <input type='submit' value='Submit'/>

                </form>
                <BookDetails book={this.state.books}/>
            </div>
        );
    }
}

export default OrderBook;
