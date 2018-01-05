import React, { Component } from 'react'
import { connect } from 'react-redux'

class BookList extends Component {
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }

    renderList() {
        return this.props.books.map((book) => { 
            return (
            <li key={book.title} className="list-group-item">
                {book.title}
            </li>
            );
        });
    }
}

function mapStateToProps(state) {
    // whatever returned here will show up as props inside of book_list
    return {
        books: state.books
    };
}

export default connect(mapStateToProps)(BookList);